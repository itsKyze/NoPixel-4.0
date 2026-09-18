import { m as _0x12a83a, a as _0x43b7db, Q as _0x2ed75e, b as _0x1b376c, j as _0x435834, n as _0x954076, x as _0x170f44, p as _0x1ae921, t as _0xbfb562, o as _0x56ffdd, e as _0x3d9290, f as _0x15768c, y as _0x4eb332, J as _0x758c13, k as _0x2cedb7, l as _0x42b1a6, c as _0x2b9521, a5 as _0x1bea3e, a7 as _0x4da877, a8 as _0x351c2e, aa as _0x1e18d8, ab as _0x4a98d4, ac as _0x38b255, ad as _0x6a998b, ae as _0x2e3741, S as _0x5e9c07, ag as _0xd55723 } from "./vendor-c69496a3.js";
import { a as _0x396e6, b as _0x4be729 } from "./vite-1e207deb.js";
import { N as _0x262370 } from "./v-packages-3113361c.js";
import "./commonjsHelpers-725317a4.js";
const Re = "_container_1pvc0_1";
const Le = "_saveButton_1pvc0_12";
const ve = {
  container: Re,
  saveButton: Le
};
const Ae = "_container_11cm2_1";
const Ue = "_active_11cm2_16";
const me = {
  container: Ae,
  active: Ue
};
const je = "_icon_17uhn_5";
const Fe = "_circle_17uhn_12";
const Te = "_edge_17uhn_19";
const He = "_edgeSelected_17uhn_27";
const Je = "_edgeNew_17uhn_34";
const J = {
  delete: "_delete_17uhn_1",
  icon: je,
  circle: Fe,
  edge: Te,
  edgeSelected: He,
  edgeNew: Je
};
const ze = _0xbfb562("<svg><path></svg>", false, true);
const Xe = _0xbfb562("<svg><g cursor=\"pointer\"><circle></circle><svg fill=\"currentColor\" stroke-width=\"0\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" color=\"white\" x=\"-10\" y=\"-10\"><path d=\"M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z\"></svg>", false, true);
const ye = _0x538522 => {
  const [_0x5490d1, _0x2dd0da] = _0x43b7db({
    x: _0x538522.position.x0 + (_0x538522.position.x1 - _0x538522.position.x0) / 2,
    y: _0x538522.position.y0 + (_0x538522.position.y1 - _0x538522.position.y0) / 2
  });
  _0x2ed75e(() => {
    const _0x53dd36 = _0x538522.position.x0 + (_0x538522.position.x1 - _0x538522.position.x0) / 2;
    const _0x109869 = _0x538522.position.y0 + (_0x538522.position.y1 - _0x538522.position.y0) / 2;
    _0x2dd0da({
      x: _0x53dd36,
      y: _0x109869
    });
  });
  function _0x1c4060(_0x44e34c, _0x309b2e) {
    const _0x3eeca3 = _0x25ebc8 => {
      if (!_0x44e34c.contains(_0x25ebc8.target)) {
        _0x309b2e()?.();
      }
    };
    document.body.addEventListener("click", _0x3eeca3);
    _0x56ffdd(() => document.body.removeEventListener("click", _0x3eeca3));
  }
  function _0xdd5760(_0x5c8505) {
    return _0x5c8505 * 100 / 200;
  }
  return [(() => {
    const _0x49b86c = ze();
    _0x1b376c(_0x1c4060, _0x49b86c, () => () => _0x538522.onClickOutside());
    _0x49b86c.$$click = () => _0x538522.onClickEdge();
    _0x435834(_0x341cfb => {
      const _0x1e4be3 = _0x538522.isNew ? J.edgeNew : _0x538522.selected ? J.edgeSelected : J.edge;
      const _0x578b3f = "M " + _0x538522.position.x0 + " " + _0x538522.position.y0 + " C " + (_0x538522.position.x0 + _0xdd5760(Math.abs(_0x538522.position.x1 - _0x538522.position.x0))) + " " + _0x538522.position.y0 + ", " + (_0x538522.position.x1 - _0xdd5760(Math.abs(_0x538522.position.x1 - _0x538522.position.x0))) + " " + _0x538522.position.y1 + ", " + _0x538522.position.x1 + " " + _0x538522.position.y1;
      if (_0x1e4be3 !== _0x341cfb._v$) {
        _0x954076(_0x49b86c, "class", _0x341cfb._v$ = _0x1e4be3);
      }
      if (_0x578b3f !== _0x341cfb._v$2) {
        _0x954076(_0x49b86c, "d", _0x341cfb._v$2 = _0x578b3f);
      }
      return _0x341cfb;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    return _0x49b86c;
  })(), _0x170f44((() => {
    const _0x41f588 = _0x170f44(() => !!_0x538522.selected);
    return () => _0x41f588() && (() => {
      const _0x1b39ca = Xe();
      const _0x531876 = _0x1b39ca.firstChild;
      const _0x173f0b = _0x531876.nextSibling;
      _0x1ae921(_0x1b39ca, "click", _0x538522.onClickDelete, true);
      _0x435834(_0x3d7598 => {
        const _0x2dbd03 = J.delete;
        const _0x46893b = "translate(" + _0x5490d1().x + ", " + _0x5490d1().y + ")";
        const _0x32664e = J.circle;
        const _0x383a02 = J.icon;
        if (_0x2dbd03 !== _0x3d7598._v$3) {
          _0x954076(_0x1b39ca, "class", _0x3d7598._v$3 = _0x2dbd03);
        }
        if (_0x46893b !== _0x3d7598._v$4) {
          _0x954076(_0x1b39ca, "transform", _0x3d7598._v$4 = _0x46893b);
        }
        if (_0x32664e !== _0x3d7598._v$5) {
          _0x954076(_0x531876, "class", _0x3d7598._v$5 = _0x32664e);
        }
        if (_0x383a02 !== _0x3d7598._v$6) {
          _0x954076(_0x173f0b, "class", _0x3d7598._v$6 = _0x383a02);
        }
        return _0x3d7598;
      }, {
        _v$3: undefined,
        _v$4: undefined,
        _v$5: undefined,
        _v$6: undefined
      });
      return _0x1b39ca;
    })();
  })())];
};
_0x12a83a(["click"]);
const qe = "_main_1744p_1";
const Ge = {
  main: qe
};
const Ke = _0xbfb562("<svg>");
const Ve = _0x1f8d5b => {
  const [_0x39dec5, _0xc81676] = _0x43b7db([]);
  const [_0x2b29d3, _0x175fae] = _0x43b7db("null");
  _0x2ed75e(() => {
    const _0x17e21a = Object.keys(_0x1f8d5b.edgesActives).filter(_0x2871d6 => _0x1f8d5b.edgesActives[_0x2871d6]);
    _0xc81676(_0x17e21a);
  });
  _0x2ed75e(() => {
    if (_0x2b29d3() !== "null" && _0x1f8d5b.newEdge !== null) {
      _0x175fae("null");
    }
  });
  return (() => {
    const _0x254d5b = Ke();
    _0x3d9290(_0x254d5b, (() => {
      const _0x530246 = _0x170f44(() => _0x1f8d5b.newEdge !== null);
      return () => _0x530246() && _0x15768c(ye, {
        selected: false,
        isNew: true,
        get position() {
          return {
            x0: _0x1f8d5b.newEdge.position.x0,
            y0: _0x1f8d5b.newEdge.position.y0,
            x1: _0x1f8d5b.newEdge.position.x1,
            y1: _0x1f8d5b.newEdge.position.y1
          };
        },
        onClickDelete: () => {},
        onClickEdge: () => {},
        onClickOutside: () => {}
      });
    })(), null);
    _0x3d9290(_0x254d5b, _0x15768c(_0x4eb332, {
      get each() {
        return _0x39dec5();
      },
      children: _0x54937e => {
        if (_0x1f8d5b.edgesActives[_0x54937e]) {
          return _0x15768c(ye, {
            get selected() {
              return _0x54937e === _0x2b29d3();
            },
            isNew: false,
            get position() {
              return {
                x0: _0x1f8d5b.edgesPositions[_0x54937e]?.x0 || 0,
                y0: _0x1f8d5b.edgesPositions[_0x54937e]?.y0 || 0,
                x1: _0x1f8d5b.edgesPositions[_0x54937e]?.x1 || 0,
                y1: _0x1f8d5b.edgesPositions[_0x54937e]?.y1 || 0
              };
            },
            onClickDelete: () => {
              _0x1f8d5b.onDeleteEdge(_0x54937e);
            },
            onClickEdge: () => {
              _0x175fae(_0x54937e);
            },
            onClickOutside: () => {
              if (_0x2b29d3() === _0x54937e) {
                _0x175fae("null");
              }
            }
          });
        }
      }
    }), null);
    _0x435834(() => _0x954076(_0x254d5b, "class", Ge.main));
    return _0x254d5b;
  })();
};
const Qe = "_node_r881m_1";
const Ye = "_nodeSelected_r881m_25";
const We = "_nodeLabel_r881m_49";
const Ze = "_nodeContent_r881m_54";
const et = "_nodeInputs_r881m_58";
const tt = "_nodeInput_r881m_58";
const nt = "_nodeOutputs_r881m_82";
const ot = "_nodeOutput_r881m_82";
const st = "_disabled_r881m_103";
const it = "_actions_r881m_109";
const ct = "_actionsHidden_r881m_122";
const R = {
  node: Qe,
  nodeSelected: Ye,
  nodeLabel: We,
  nodeContent: Ze,
  nodeInputs: et,
  nodeInput: tt,
  nodeOutputs: nt,
  nodeOutput: ot,
  disabled: st,
  actions: it,
  actionsHidden: ct,
  delete: "_delete_r881m_136"
};
const ut = _0xbfb562("<div><div></div><div>");
const lt = _0xbfb562("<svg fill=\"currentColor\" stroke-width=\"0\" baseProfile=\"tiny\" version=\"1.2\" viewBox=\"4 4 16 16\" style=\"overflow:visible;\"><path d=\"M12 4c-4.419 0-8 3.582-8 8s3.581 8 8 8 8-3.582 8-8-3.581-8-8-8zm3.707 10.293a.999.999 0 11-1.414 1.414L12 13.414l-2.293 2.293a.997.997 0 01-1.414 0 .999.999 0 010-1.414L10.586 12 8.293 9.707a.999.999 0 111.414-1.414L12 10.586l2.293-2.293a.999.999 0 111.414 1.414L13.414 12l2.293 2.293z\">");
const rt = _0xbfb562("<span>");
const ee = _0xbfb562("<div>");
const dt = _0xbfb562("<div id=\"outputs\">");
const at = _0x1992b1 => {
  let _0x12b707 = [...Array(_0x1992b1.inputs)];
  let _0x4519aa = [...Array(_0x1992b1.outputs)];
  _0x758c13(() => {
    let _0x399912 = [];
    let _0x43d9e6 = [];
    for (let _0x303405 = 0; _0x303405 < _0x12b707.length; _0x303405++) {
      _0x399912.push({
        offset: {
          x: _0x12b707[_0x303405].getBoundingClientRect().x,
          y: _0x12b707[_0x303405].getBoundingClientRect().y
        }
      });
    }
    for (let _0x17eb54 = 0; _0x17eb54 < _0x4519aa.length; _0x17eb54++) {
      _0x43d9e6.push({
        offset: {
          x: _0x4519aa[_0x17eb54].getBoundingClientRect().x,
          y: _0x4519aa[_0x17eb54].getBoundingClientRect().y
        }
      });
    }
    _0x1992b1.onNodeMount(_0x399912, _0x43d9e6);
  });
  function _0x3bc261(_0x58b051, _0x4b492c) {
    const _0xe25f16 = _0x54db49 => {
      if (!_0x58b051.contains(_0x54db49.target)) {
        _0x4b492c()?.();
      }
    };
    document.body.addEventListener("click", _0xe25f16);
    _0x56ffdd(() => document.body.removeEventListener("click", _0xe25f16));
  }
  return (() => {
    const _0x278331 = ut();
    const _0x4bc18d = _0x278331.firstChild;
    const _0x52ff83 = _0x4bc18d.nextSibling;
    _0x1b376c(_0x3bc261, _0x278331, () => () => _0x1992b1.onClickOutside());
    _0x1ae921(_0x278331, "mousedown", _0x1992b1.onMouseDown, true);
    const _0x2a7c47 = _0x1992b1.ref;
    if (typeof _0x2a7c47 == "function") {
      _0x1b376c(_0x2a7c47, _0x278331);
    } else {
      _0x1992b1.ref = _0x278331;
    }
    _0x3d9290(_0x4bc18d, (() => {
      const _0x3ffedb = _0x170f44(() => !!_0x1992b1.actions && !!_0x1992b1.actions.delete);
      return () => _0x3ffedb() && (() => {
        const _0x87f995 = lt();
        _0x87f995.$$click = () => {
          if (_0x1992b1.onClickDelete) {
            _0x1992b1.onClickDelete();
          }
        };
        _0x435834(() => _0x954076(_0x87f995, "class", R.delete));
        return _0x87f995;
      })();
    })());
    _0x3d9290(_0x278331, (() => {
      const _0x1392e0 = _0x170f44(() => !!_0x1992b1.label);
      return () => _0x1392e0() && (() => {
        const _0x3f3f30 = rt();
        _0x3d9290(_0x3f3f30, () => _0x1992b1.label);
        _0x435834(() => _0x2cedb7(_0x3f3f30, R.nodeLabel));
        return _0x3f3f30;
      })();
    })(), _0x52ff83);
    _0x3d9290(_0x52ff83, () => _0x1992b1.content);
    _0x3d9290(_0x278331, (() => {
      const _0x4671d2 = _0x170f44(() => _0x1992b1.inputs > 0);
      return () => _0x4671d2() && (() => {
        const _0x95e98a = ee();
        _0x3d9290(_0x95e98a, _0x15768c(_0x4eb332, {
          get each() {
            return [...Array(_0x1992b1.inputs).keys()];
          },
          children: (_0x3f3cfa, _0x8a20e7) => (() => {
            const _0x555f08 = ee();
            _0x555f08.$$mouseup = _0x4d6a7e => {
              _0x4d6a7e.stopPropagation();
              if (_0x1992b1.onMouseUpInput) {
                _0x1992b1.onMouseUpInput(_0x8a20e7());
              }
            };
            _0x555f08.$$mousedown = _0x2039a3 => {
              _0x2039a3.stopPropagation();
            };
            _0x1b376c(_0x299218 => {
              _0x12b707[_0x8a20e7()] = _0x299218;
            }, _0x555f08);
            _0x435834(() => _0x2cedb7(_0x555f08, R.nodeInput));
            return _0x555f08;
          })()
        }));
        _0x435834(() => _0x2cedb7(_0x95e98a, R.nodeInputs));
        return _0x95e98a;
      })();
    })(), null);
    _0x3d9290(_0x278331, (() => {
      const _0x26da2c = _0x170f44(() => _0x1992b1.outputs > 0);
      return () => _0x26da2c() && (() => {
        const _0x593111 = dt();
        _0x3d9290(_0x593111, _0x15768c(_0x4eb332, {
          get each() {
            return [...Array(_0x1992b1.outputs).keys()];
          },
          children: (_0x3effea, _0x586d62) => (() => {
            const _0x523c23 = ee();
            _0x523c23.$$mousedown = _0x4eee67 => {
              _0x4eee67.stopPropagation();
              if (!_0x1992b1.disabled && _0x1992b1.onMouseDownOutput) {
                _0x1992b1.onMouseDownOutput(_0x586d62());
              }
            };
            _0x1b376c(_0x13e8c0 => {
              _0x4519aa[_0x586d62()] = _0x13e8c0;
            }, _0x523c23);
            _0x435834(_0x33d3bd => {
              const _0x35f632 = R.nodeOutput;
              const _0x2b7d1e = {
                [R.disabled]: _0x1992b1.disabled
              };
              if (_0x35f632 !== _0x33d3bd._v$5) {
                _0x2cedb7(_0x523c23, _0x33d3bd._v$5 = _0x35f632);
              }
              _0x33d3bd._v$6 = _0x42b1a6(_0x523c23, _0x2b7d1e, _0x33d3bd._v$6);
              return _0x33d3bd;
            }, {
              _v$5: undefined,
              _v$6: undefined
            });
            return _0x523c23;
          })()
        }));
        _0x435834(() => _0x2cedb7(_0x593111, R.nodeOutputs));
        return _0x593111;
      })();
    })(), null);
    _0x435834(_0x2839d3 => {
      const _0x4f4143 = _0x1992b1.selected ? R.nodeSelected : R.node;
      const _0x466acb = "translate(" + _0x1992b1.x + "px, " + _0x1992b1.y + "px)";
      const _0x1f2c5f = _0x1992b1.selected ? R.actions : R.actionsHidden;
      const _0x5219d9 = R.nodeContent;
      if (_0x4f4143 !== _0x2839d3._v$) {
        _0x2cedb7(_0x278331, _0x2839d3._v$ = _0x4f4143);
      }
      if (_0x466acb !== _0x2839d3._v$2) {
        if ((_0x2839d3._v$2 = _0x466acb) != null) {
          _0x278331.style.setProperty("transform", _0x466acb);
        } else {
          _0x278331.style.removeProperty("transform");
        }
      }
      if (_0x1f2c5f !== _0x2839d3._v$3) {
        _0x2cedb7(_0x4bc18d, _0x2839d3._v$3 = _0x1f2c5f);
      }
      if (_0x5219d9 !== _0x2839d3._v$4) {
        _0x2cedb7(_0x52ff83, _0x2839d3._v$4 = _0x5219d9);
      }
      return _0x2839d3;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined
    });
    return _0x278331;
  })();
};
_0x12a83a(["mousedown", "click", "mouseup"]);
const ft = "_main_yo48n_1";
const gt = {
  main: ft
};
const _t = _0xbfb562("<div>");
const xt = _0x955740 => {
  const [_0x59a4a2, _0x5f4b9a] = _0x43b7db(null);
  const [_0x394ea6, _0x5df4ba] = _0x43b7db(null);
  let _0x543a8e;
  function _0x1d74f3(_0x4c3e16) {
    const _0x53d435 = _0x4c3e16.x - _0x543a8e.getBoundingClientRect().x;
    const _0x2b2c7c = _0x4c3e16.y - _0x543a8e.getBoundingClientRect().y;
    if (_0x59a4a2() !== null) {
      _0x955740.onNodeMove(_0x59a4a2() || 0, _0x53d435, _0x2b2c7c);
    }
    _0x955740.onMouseMove(_0x53d435, _0x2b2c7c);
  }
  function _0x5754a6(_0xf925c7) {
    _0x5f4b9a(null);
    _0x955740.onMouseUp();
  }
  function _0x1ca7c9(_0x17be5a, _0xd1ac70, _0x505c91) {
    _0x5f4b9a(_0x17be5a);
    _0x5df4ba(_0x17be5a);
    _0x955740.onNodePress(_0xd1ac70 - _0x543a8e.getBoundingClientRect().x - _0x955740.nodesPositions[_0x17be5a].x, _0x505c91 - _0x543a8e.getBoundingClientRect().y - _0x955740.nodesPositions[_0x17be5a].y);
  }
  return (() => {
    const _0x3a6cd7 = _t();
    _0x3a6cd7.$$mouseup = _0x5754a6;
    _0x3a6cd7.$$mousemove = _0x1d74f3;
    const _0x3e7090 = _0x543a8e;
    if (typeof _0x3e7090 == "function") {
      _0x1b376c(_0x3e7090, _0x3a6cd7);
    } else {
      _0x543a8e = _0x3a6cd7;
    }
    _0x3d9290(_0x3a6cd7, _0x15768c(_0x4eb332, {
      get each() {
        return _0x955740.nodes;
      },
      children: (_0x32c0ba, _0x484719) => _0x15768c(at, {
        get x() {
          return _0x955740.nodesPositions[_0x484719()].x;
        },
        get y() {
          return _0x955740.nodesPositions[_0x484719()].y;
        },
        get selected() {
          return _0x394ea6() === _0x484719();
        },
        get actions() {
          return _0x32c0ba.actions;
        },
        get label() {
          return _0x32c0ba.data.label;
        },
        get fixed() {
          return _0x32c0ba.data.fixed;
        },
        get disabled() {
          return _0x32c0ba.data.disabled;
        },
        get content() {
          return _0x32c0ba.data.content;
        },
        get inputs() {
          return _0x32c0ba.inputs;
        },
        get outputs() {
          return _0x32c0ba.outputs;
        },
        onMouseDown: _0x540e52 => _0x1ca7c9(_0x484719(), _0x540e52.x, _0x540e52.y),
        onNodeMount: (_0x35ba56, _0x3afe72) => _0x955740.onNodeMount({
          nodeIndex: _0x484719(),
          inputs: _0x35ba56.map(_0x23d9ba => ({
            offset: {
              x: _0x23d9ba.offset.x - _0x543a8e.getBoundingClientRect().x - _0x955740.nodesPositions[_0x484719()].x + 6,
              y: _0x23d9ba.offset.y - _0x543a8e.getBoundingClientRect().y - _0x955740.nodesPositions[_0x484719()].y + 6
            }
          })),
          outputs: _0x3afe72.map(_0xa663e0 => ({
            offset: {
              x: _0xa663e0.offset.x - _0x543a8e.getBoundingClientRect().x - _0x955740.nodesPositions[_0x484719()].x + 6,
              y: _0xa663e0.offset.y - _0x543a8e.getBoundingClientRect().y - _0x955740.nodesPositions[_0x484719()].y + 6
            }
          }))
        }),
        onMouseDownOutput: _0x414e2e => _0x955740.onOutputMouseDown(_0x484719(), _0x414e2e),
        onMouseUpInput: _0x3ebe42 => _0x955740.onInputMouseUp(_0x484719(), _0x3ebe42),
        onClickOutside: () => {
          if (_0x484719() === _0x394ea6()) {
            _0x5df4ba(null);
          }
        },
        onClickDelete: () => {
          _0x5df4ba(null);
          _0x955740.onNodeDelete(_0x32c0ba.id);
        }
      })
    }));
    _0x435834(() => _0x2cedb7(_0x3a6cd7, gt.main));
    return _0x3a6cd7;
  })();
};
_0x12a83a(["mousemove", "mouseup"]);
const $t = "_main_1cm5o_33";
const vt = "_wrapper_1cm5o_40";
const mt = "_content_1cm5o_46";
const te = {
  main: $t,
  wrapper: vt,
  content: mt
};
const yt = _0xbfb562("<div><div><div>");
function V(_0x5ed28b, _0x7c2f21, _0x2dac7b, _0x32d7a8) {
  return "edge_" + _0x5ed28b + ":" + _0x7c2f21 + "_" + _0x2dac7b + ":" + _0x32d7a8;
}
function he(_0x556743) {
  const _0x40b3f4 = {};
  const _0x358db9 = {};
  const _0x5f1f8a = {};
  for (let _0x31f9e8 = 0; _0x31f9e8 < _0x556743.length; _0x31f9e8++) {
    for (let _0x1acca0 = 0; _0x1acca0 < _0x556743.length; _0x1acca0++) {
      if (_0x31f9e8 !== _0x1acca0) {
        const _0x40ac78 = _0x556743[_0x31f9e8];
        const _0x32795a = _0x556743[_0x1acca0];
        for (let _0x3cca7a = 0; _0x3cca7a < _0x40ac78.outputs; _0x3cca7a++) {
          for (let _0x5270a9 = 0; _0x5270a9 < _0x32795a.inputs; _0x5270a9++) {
            const _0x2000a3 = V(_0x40ac78.id, _0x3cca7a, _0x32795a.id, _0x5270a9);
            _0x358db9[_0x2000a3] = {
              x0: 0,
              y0: 0,
              x1: 0,
              y1: 0
            };
            _0x5f1f8a[_0x2000a3] = false;
            _0x40b3f4[_0x2000a3] = {
              outNodeId: _0x40ac78.id,
              outputIndex: _0x3cca7a,
              inNodeId: _0x32795a.id,
              inputIndex: _0x5270a9
            };
          }
        }
      }
    }
  }
  return {
    initEdgesNodes: _0x40b3f4,
    initEdgesPositions: _0x358db9,
    initEdgesActives: _0x5f1f8a
  };
}
function Ne(_0x9c442d, _0x250c78) {
  const _0x99d79 = _0x9c442d.map(_0x7d7cd0 => _0x7d7cd0.position);
  const _0x5635a0 = _0x9c442d.map(_0x269366 => ({
    edgesIn: _0x250c78.map(_0xb04cee => _0xb04cee.targetNode === _0x269366.id ? V(_0xb04cee.sourceNode, _0xb04cee.sourceOutput, _0xb04cee.targetNode, _0xb04cee.targetInput) : "null").filter(_0x554ead => _0x554ead !== "null"),
    edgesOut: _0x250c78.map(_0x4ab702 => _0x4ab702.sourceNode === _0x269366.id ? V(_0x4ab702.sourceNode, _0x4ab702.sourceOutput, _0x4ab702.targetNode, _0x4ab702.targetInput) : "null").filter(_0x316aef => _0x316aef !== "null"),
    ..._0x269366
  }));
  const _0x2f7eca = _0x9c442d.map(_0x65f790 => ({
    inputs: [...Array(_0x65f790.inputs)].map(() => ({
      offset: {
        x: 0,
        y: 0
      }
    })),
    outputs: [...Array(_0x65f790.outputs)].map(() => ({
      offset: {
        x: 0,
        y: 0
      }
    }))
  }));
  return {
    initNodesPositions: _0x99d79,
    initNodesData: _0x5635a0,
    initNodesOffsets: _0x2f7eca
  };
}
const ht = _0x435717 => {
  const {
    initEdgesNodes: _0x49cb2e,
    initEdgesPositions: _0x4086ce,
    initEdgesActives: _0x5f1a11
  } = he(_0x435717.nodes);
  const [_0x5ee405, _0x4eee59] = _0x43b7db(_0x49cb2e);
  const [_0x1ad642, _0x19774b] = _0x43b7db(_0x4086ce);
  const [_0x19c441, _0x3498ca] = _0x43b7db(_0x5f1a11);
  const {
    initNodesPositions: _0x27f209,
    initNodesData: _0x5a6f02,
    initNodesOffsets: _0x9b62c3
  } = Ne(_0x435717.nodes, _0x435717.edges);
  const [_0x58de5a, _0x3b2a4c] = _0x43b7db(_0x27f209);
  const [_0x4d5d6e, _0x103756] = _0x2b9521(_0x5a6f02);
  const [_0x47f3d1, _0x46c9a2] = _0x2b9521(_0x9b62c3);
  const [_0x47a863, _0x5dcbb0] = _0x43b7db({
    x: 0,
    y: 0
  });
  const [_0x1636ef, _0x3e8df9] = _0x43b7db(null);
  _0x2ed75e(() => {
    const _0x14189a = _0x435717.nodes.length;
    const _0x124079 = _0x4d5d6e.length;
    if (_0x14189a !== _0x124079) {
      const {
        initEdgesNodes: _0x5e8a4f,
        initEdgesPositions: _0x5c7ecf,
        initEdgesActives: _0x326e53
      } = he(_0x435717.nodes);
      _0x4eee59(_0x5e8a4f);
      _0x19774b(_0x5c7ecf);
      _0x3498ca(_0x326e53);
      const {
        initNodesPositions: _0x49bd6,
        initNodesData: _0x2f21cb,
        initNodesOffsets: _0x23ce7c
      } = Ne(_0x435717.nodes, _0x435717.edges);
      _0x3b2a4c(_0x49bd6);
      _0x103756(_0x2f21cb);
      _0x46c9a2(_0x23ce7c);
    }
  });
  function _0x45ef9b(_0xff1b5a) {
    _0x46c9a2(_0x1bea3e(_0x4610fe => {
      _0x4610fe[_0xff1b5a.nodeIndex].inputs = _0xff1b5a.inputs;
      _0x4610fe[_0xff1b5a.nodeIndex].outputs = _0xff1b5a.outputs;
    }));
    _0x3498ca(_0x5e7fe1 => {
      const _0x1d9632 = {
        ..._0x5e7fe1
      };
      _0x4d5d6e[_0xff1b5a.nodeIndex].edgesIn.map(_0x550b33 => {
        _0x1d9632[_0x550b33] = true;
      });
      _0x4d5d6e[_0xff1b5a.nodeIndex].edgesOut.map(_0x418bb3 => {
        _0x1d9632[_0x418bb3] = true;
      });
      return _0x1d9632;
    });
    _0x19774b(_0x590827 => {
      const _0x19b28a = {
        ..._0x590827
      };
      _0x4d5d6e[_0xff1b5a.nodeIndex].edgesIn.map(_0x5f3404 => {
        _0x19b28a[_0x5f3404] = {
          x0: _0x590827[_0x5f3404]?.x0 || 0,
          y0: _0x590827[_0x5f3404]?.y0 || 0,
          x1: _0x58de5a()[_0xff1b5a.nodeIndex].x + _0xff1b5a.inputs[_0x5ee405()[_0x5f3404].inputIndex].offset.x,
          y1: _0x58de5a()[_0xff1b5a.nodeIndex].y + _0xff1b5a.inputs[_0x5ee405()[_0x5f3404].inputIndex].offset.y
        };
      });
      _0x4d5d6e[_0xff1b5a.nodeIndex].edgesOut.map(_0x1df0d1 => {
        _0x19b28a[_0x1df0d1] = {
          x0: _0x58de5a()[_0xff1b5a.nodeIndex].x + _0xff1b5a.outputs[_0x5ee405()[_0x1df0d1].outputIndex].offset.x,
          y0: _0x58de5a()[_0xff1b5a.nodeIndex].y + _0xff1b5a.outputs[_0x5ee405()[_0x1df0d1].outputIndex].offset.y,
          x1: _0x590827[_0x1df0d1]?.x1 || 0,
          y1: _0x590827[_0x1df0d1]?.y1 || 0
        };
      });
      return _0x19b28a;
    });
  }
  function _0x8c2aff(_0x2179e4, _0x1688b3) {
    _0x5dcbb0({
      x: _0x2179e4,
      y: _0x1688b3
    });
  }
  function _0x47dd84(_0x716c7e, _0x45d49c, _0x2088e1) {
    _0x3b2a4c(_0x74b7ff => {
      const _0x29067b = [..._0x74b7ff];
      _0x29067b[_0x716c7e].x = _0x45d49c - _0x47a863().x;
      _0x29067b[_0x716c7e].y = _0x2088e1 - _0x47a863().y;
      return _0x29067b;
    });
    _0x19774b(_0x4c425e => {
      const _0x5f7e08 = {
        ..._0x4c425e
      };
      _0x4d5d6e[_0x716c7e].edgesIn.map(_0xf88762 => {
        if (_0x19c441()[_0xf88762]) {
          _0x5f7e08[_0xf88762] = {
            x0: _0x4c425e[_0xf88762]?.x0 || 0,
            y0: _0x4c425e[_0xf88762]?.y0 || 0,
            x1: _0x45d49c + _0x47f3d1[_0x716c7e].inputs[_0x5ee405()[_0xf88762].inputIndex].offset.x - _0x47a863().x,
            y1: _0x2088e1 + _0x47f3d1[_0x716c7e].inputs[_0x5ee405()[_0xf88762].inputIndex].offset.y - _0x47a863().y
          };
        }
      });
      _0x4d5d6e[_0x716c7e].edgesOut.map(_0x3963d5 => {
        if (_0x19c441()[_0x3963d5]) {
          _0x5f7e08[_0x3963d5] = {
            x0: _0x45d49c + _0x47f3d1[_0x716c7e].outputs[_0x5ee405()[_0x3963d5].outputIndex].offset.x - _0x47a863().x,
            y0: _0x2088e1 + _0x47f3d1[_0x716c7e].outputs[_0x5ee405()[_0x3963d5].outputIndex].offset.y - _0x47a863().y,
            x1: _0x4c425e[_0x3963d5]?.x1 || 0,
            y1: _0x4c425e[_0x3963d5]?.y1 || 0
          };
        }
      });
      return _0x5f7e08;
    });
  }
  function _0x4206ff(_0x9c6bcc) {
    const _0x688e4 = _0x435717.nodes.filter(_0x2a43fa => _0x2a43fa.id !== _0x9c6bcc);
    const _0x4f6728 = _0x435717.edges.filter(_0x3b630c => _0x3b630c.sourceNode !== _0x9c6bcc && _0x3b630c.targetNode !== _0x9c6bcc);
    _0x435717.onEdgesChange(_0x4f6728);
    _0x435717.onNodesChange(_0x688e4);
  }
  function _0x3c3fd2(_0x53c96f, _0x3bad99) {
    const _0x5b0dc4 = _0x58de5a()[_0x53c96f];
    const _0x3a4161 = _0x47f3d1[_0x53c96f].outputs[_0x3bad99].offset;
    _0x3e8df9({
      position: {
        x0: _0x5b0dc4.x + _0x3a4161.x,
        y0: _0x5b0dc4.y + _0x3a4161.y,
        x1: _0x5b0dc4.x + _0x3a4161.x,
        y1: _0x5b0dc4.y + _0x3a4161.y
      },
      sourceNode: _0x53c96f,
      sourceOutput: _0x3bad99
    });
  }
  function _0x5538d0(_0xc2afd4, _0x5754ac) {
    if (_0x1636ef()?.sourceNode === _0xc2afd4) {
      _0x3e8df9(null);
      return;
    }
    const _0x22e76a = JSON.parse(JSON.stringify(_0x4d5d6e[_0x1636ef()?.sourceNode || 0].edgesOut));
    const _0x3e0e7c = JSON.parse(JSON.stringify(_0x4d5d6e[_0xc2afd4].edgesIn));
    if (!_0x1636ef()) {
      return;
    }
    const _0x1312ad = _0x4d5d6e[_0x1636ef()?.sourceNode || 0].id;
    const _0x46f672 = _0x4d5d6e[_0xc2afd4].id;
    const _0x4cdb4e = V(_0x1312ad, _0x1636ef()?.sourceOutput || 0, _0x46f672, _0x5754ac);
    let _0x32ff1d = false;
    if (_0x3e0e7c.includes(_0x4cdb4e)) {
      _0x32ff1d = true;
    }
    if (_0x22e76a.length > 0) {
      _0x32ff1d = true;
    }
    if (!_0x32ff1d) {
      _0x19774b(_0x5eb080 => {
        const _0x1a4fe5 = {
          ..._0x5eb080
        };
        _0x1a4fe5[_0x4cdb4e] = {
          x0: _0x58de5a()[_0x1636ef()?.sourceNode || 0].x + _0x47f3d1[_0x1636ef()?.sourceNode || 0].outputs[_0x1636ef()?.sourceOutput || 0].offset.x,
          y0: _0x58de5a()[_0x1636ef()?.sourceNode || 0].y + _0x47f3d1[_0x1636ef()?.sourceNode || 0].outputs[_0x1636ef()?.sourceOutput || 0].offset.y,
          x1: _0x58de5a()[_0xc2afd4].x + _0x47f3d1[_0xc2afd4].inputs[_0x5754ac].offset.x,
          y1: _0x58de5a()[_0xc2afd4].y + _0x47f3d1[_0xc2afd4].inputs[_0x5754ac].offset.y
        };
        return _0x1a4fe5;
      });
      _0x3498ca(_0x2ea620 => {
        const _0x4f1c1d = {
          ..._0x2ea620
        };
        _0x4f1c1d[_0x4cdb4e] = true;
        return _0x4f1c1d;
      });
      _0x103756(_0x1bea3e(_0x1c4db7 => {
        _0x1c4db7[_0x1636ef()?.sourceNode || 0].edgesOut.push(_0x4cdb4e);
        _0x1c4db7[_0xc2afd4].edgesIn.push(_0x4cdb4e);
      }));
      const _0x7189a5 = Object.keys(_0x19c441());
      const _0x310a8d = [];
      for (let _0x4d4667 = 0; _0x4d4667 < _0x7189a5.length; _0x4d4667++) {
        if (_0x19c441()[_0x7189a5[_0x4d4667]]) {
          const _0xb18f0e = _0x5ee405()[_0x7189a5[_0x4d4667]];
          _0x310a8d.push({
            id: _0x7189a5[_0x4d4667],
            sourceNode: _0xb18f0e.outNodeId,
            sourceOutput: _0xb18f0e.outputIndex,
            targetNode: _0xb18f0e.inNodeId,
            targetInput: _0xb18f0e.inputIndex
          });
        }
      }
    }
    const _0x1d2a30 = Object.keys(_0x19c441());
    const _0x4f6985 = [];
    for (let _0x225fd7 = 0; _0x225fd7 < _0x1d2a30.length; _0x225fd7++) {
      if (_0x19c441()[_0x1d2a30[_0x225fd7]]) {
        const _0x2bbd24 = _0x5ee405()[_0x1d2a30[_0x225fd7]];
        _0x4f6985.push({
          id: _0x1d2a30[_0x225fd7],
          sourceNode: _0x2bbd24.outNodeId,
          sourceOutput: _0x2bbd24.outputIndex,
          targetNode: _0x2bbd24.inNodeId,
          targetInput: _0x2bbd24.inputIndex
        });
      }
    }
    _0x435717.onEdgesChange(_0x4f6985);
    _0x3e8df9(null);
  }
  function _0xa992ed() {
    _0x3e8df9(null);
  }
  function _0x462b6c(_0x5aed88, _0x5cd598) {
    if (_0x1636ef() !== null) {
      _0x3e8df9({
        position: {
          x0: _0x1636ef()?.position?.x0 || 0,
          y0: _0x1636ef()?.position?.y0 || 0,
          x1: _0x5aed88,
          y1: _0x5cd598
        },
        sourceNode: _0x1636ef()?.sourceNode || 0,
        sourceOutput: _0x1636ef()?.sourceOutput || 0
      });
    }
  }
  function _0xfb8ccc(_0xcf4927) {
    _0x103756(_0x1bea3e(_0x129eaa => {
      const _0x14d07f = _0x5ee405()[_0xcf4927].outNodeId;
      const _0x3bfa26 = _0x5ee405()[_0xcf4927].inNodeId;
      const _0x3f9fbe = _0x129eaa.findIndex(_0x4a90b1 => _0x4a90b1.id === _0x14d07f);
      const _0x4bd2b2 = _0x129eaa.findIndex(_0x5ce748 => _0x5ce748.id === _0x3bfa26);
      _0x129eaa[_0x4bd2b2].edgesIn = _0x129eaa[_0x4bd2b2].edgesIn.filter(_0xa43138 => _0xa43138 !== _0xcf4927);
      _0x129eaa[_0x3f9fbe].edgesOut = _0x129eaa[_0x3f9fbe].edgesOut.filter(_0x5419e3 => _0x5419e3 !== _0xcf4927);
    }));
    _0x3498ca(_0x1bce8a => {
      const _0x25fba7 = {
        ..._0x1bce8a
      };
      _0x25fba7[_0xcf4927] = false;
      return _0x25fba7;
    });
    const _0x386424 = Object.keys(_0x19c441());
    const _0x56cd90 = [];
    for (let _0x56c81d = 0; _0x56c81d < _0x386424.length; _0x56c81d++) {
      if (_0x19c441()[_0x386424[_0x56c81d]]) {
        const _0x41d82c = _0x5ee405()[_0x386424[_0x56c81d]];
        _0x56cd90.push({
          id: _0x386424[_0x56c81d],
          sourceNode: _0x41d82c.outNodeId,
          sourceOutput: _0x41d82c.outputIndex,
          targetNode: _0x41d82c.inNodeId,
          targetInput: _0x41d82c.inputIndex
        });
      }
    }
    _0x435717.onEdgesChange(_0x56cd90);
  }
  return (() => {
    const _0x3d7b8c = yt();
    const _0xbe6983 = _0x3d7b8c.firstChild;
    const _0x4291fe = _0xbe6983.firstChild;
    _0x3d9290(_0x4291fe, _0x15768c(xt, {
      get nodesPositions() {
        return _0x58de5a();
      },
      nodes: _0x4d5d6e,
      onNodeMount: _0x45ef9b,
      onNodePress: _0x8c2aff,
      onNodeMove: _0x47dd84,
      onNodeDelete: _0x4206ff,
      onOutputMouseDown: _0x3c3fd2,
      onInputMouseUp: _0x5538d0,
      onMouseUp: _0xa992ed,
      onMouseMove: _0x462b6c
    }), null);
    _0x3d9290(_0x4291fe, _0x15768c(Ve, {
      get newEdge() {
        return _0x1636ef();
      },
      get edgesActives() {
        return _0x19c441();
      },
      get edgesPositions() {
        return _0x1ad642();
      },
      onDeleteEdge: _0xfb8ccc
    }), null);
    _0x435834(_0x23763e => {
      const _0x718692 = te.main;
      const _0x1e80ae = te.wrapper;
      const _0xc5ef81 = te.content;
      const _0x2e7007 = _0x1636ef() !== null ? "crosshair" : "inherit";
      if (_0x718692 !== _0x23763e._v$) {
        _0x2cedb7(_0x3d7b8c, _0x23763e._v$ = _0x718692);
      }
      if (_0x1e80ae !== _0x23763e._v$2) {
        _0x2cedb7(_0xbe6983, _0x23763e._v$2 = _0x1e80ae);
      }
      if (_0xc5ef81 !== _0x23763e._v$3) {
        _0x2cedb7(_0x4291fe, _0x23763e._v$3 = _0xc5ef81);
      }
      if (_0x2e7007 !== _0x23763e._v$4) {
        if ((_0x23763e._v$4 = _0x2e7007) != null) {
          _0x4291fe.style.setProperty("cursor", _0x2e7007);
        } else {
          _0x4291fe.style.removeProperty("cursor");
        }
      }
      return _0x23763e;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined
    });
    return _0x3d7b8c;
  })();
};
const Nt = _0xbfb562("<p>Rack <span>");
const kt = _0xbfb562("<p>Desk <span>");
const wt = _0xbfb562("<div>");
const Ct = () => {
  const {
    deskData: _0xc1dc87,
    nodes: _0x21e57c,
    edges: _0x3625a8,
    setNodes: _0x53406a,
    setEdges: _0x1c137e
  } = we();
  function _0x36cf37(_0x434b75) {
    const _0x357f23 = window.innerHeight;
    return _0x434b75 * 0.01 * _0x357f23;
  }
  const _0x688a47 = [];
  const _0xae8c69 = [];
  _0x758c13(() => {
    for (let _0x8c1060 = 0; _0x8c1060 < _0xc1dc87().totalRacks.length; _0x8c1060++) {
      const _0x4aea3b = _0xc1dc87().totalRacks[_0x8c1060];
      const _0x473c5e = 5;
      const _0x9a8e0d = _0x8c1060 % _0x473c5e;
      let _0x157e02 = Math.floor(_0x8c1060 / _0x473c5e);
      _0x157e02 = _0x9a8e0d % 2 === 0 ? _0x157e02 * 2 : _0x157e02 * 2 + 1;
      _0x688a47.push({
        id: _0x4aea3b.id,
        position: {
          x: _0x36cf37(2) + _0x36cf37(12) * _0x9a8e0d,
          y: _0x36cf37(5) * _0x157e02 + _0x36cf37(2)
        },
        data: {
          content: (() => {
            const _0x58b7fb = Nt();
            const _0xff2d83 = _0x58b7fb.firstChild;
            const _0x36e380 = _0xff2d83.nextSibling;
            _0x3d9290(_0x36e380, "#" + (_0x8c1060 + 1));
            return _0x58b7fb;
          })()
        },
        inputs: 0,
        outputs: 1
      });
      const _0x1fc6bf = _0x4aea3b.public.linkedId;
      if (_0x1fc6bf) {
        if (!_0xc1dc87().totalDesks.find(_0x16ef62 => _0x16ef62.id === _0x1fc6bf)) {
          continue;
        }
        _0xae8c69.push({
          id: "edge-" + _0x8c1060,
          sourceNode: _0x4aea3b.id,
          sourceOutput: 0,
          targetNode: _0x1fc6bf,
          targetInput: 0
        });
      }
    }
    for (let _0x4a297e = 0; _0x4a297e < _0xc1dc87().totalDesks.length; _0x4a297e++) {
      const _0x3aaf71 = _0xc1dc87().totalDesks[_0x4a297e];
      const _0x33c21f = 1;
      const _0x3699ad = _0x4a297e % _0x33c21f;
      const _0x44af17 = Math.floor(_0x4a297e / _0x33c21f);
      _0x688a47.push({
        id: _0x3aaf71.id,
        position: {
          x: _0x36cf37(85) + _0x36cf37(23) * _0x3699ad,
          y: _0x36cf37(10) * _0x44af17 + _0x36cf37(5)
        },
        data: {
          fixed: true,
          content: (() => {
            const _0x3391c8 = kt();
            const _0x1885f9 = _0x3391c8.firstChild;
            const _0x3c7794 = _0x1885f9.nextSibling;
            _0x3d9290(_0x3c7794, "#" + (_0x4a297e + 1));
            _0x435834(_0x1a704e => _0x42b1a6(_0x3c7794, {
              [me.active]: _0x3aaf71.id === _0xc1dc87().currentDeskId
            }, _0x1a704e));
            return _0x3391c8;
          })()
        },
        inputs: 1,
        outputs: 0
      });
    }
  });
  _0x53406a(_0x688a47);
  _0x1c137e(_0xae8c69);
  return (() => {
    const _0x2b13ad = wt();
    _0x3d9290(_0x2b13ad, _0x15768c(ht, {
      get nodes() {
        return _0x21e57c();
      },
      get edges() {
        return _0x3625a8();
      },
      onNodesChange: _0x15a956 => {
        _0x53406a(_0x15a956);
      },
      onEdgesChange: _0x41fe85 => {
        _0x1c137e(_0x41fe85);
      }
    }));
    _0x435834(() => _0x2cedb7(_0x2b13ad, me.container));
    return _0x2b13ad;
  })();
};
const bt = "_container_xj2hp_1";
const Ot = "_iconBox_xj2hp_8";
const ne = {
  container: bt,
  iconBox: Ot
};
const Et = _0xbfb562("<div><div class=\"flex flex-row items-center justify-center\"><div><i></i></div><svg class=\"absolute ml-[1.5vh]\" width=\"5.37vh\" height=\"5.37vh\" viewBox=\"0 0 58 58\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"28.9912\" y=\"0.707107\" width=\"40\" height=\"40\" rx=\"1.5\" transform=\"rotate(45 28.9912 0.707107)\" stroke=\"url(#paint0_linear_9449_56)\"></rect><defs><linearGradient id=\"paint0_linear_9449_56\" x1=\"70.0095\" y1=\"-0.00612807\" x2=\"46.675\" y2=\"21.2071\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#00F8B9\"></stop><stop offset=\"1\" stop-color=\"#00926D\" stop-opacity=\"0\"></div><div class=\"flex w-full flex-col items-start justify-center gap-[0.3vh]\"><h1></h1><p>");
const z = _0x32ff2f => (() => {
  const _0x811635 = Et();
  const _0x220d25 = _0x811635.firstChild;
  const _0x580f97 = _0x220d25.firstChild;
  const _0x198844 = _0x580f97.firstChild;
  const _0x54d06 = _0x220d25.nextSibling;
  const _0x28c29e = _0x54d06.firstChild;
  const _0x1bb5ed = _0x28c29e.nextSibling;
  _0x3d9290(_0x28c29e, () => _0x32ff2f.label);
  _0x3d9290(_0x1bb5ed, () => _0x32ff2f.text ?? _0x32ff2f.progress?.toFixed(1) + "%");
  _0x435834(_0x5ae248 => {
    const _0x2902c0 = ne.container;
    const _0x265aae = ne.iconBox;
    const _0x4c3ba3 = _0x32ff2f.icon;
    const _0x3f92e9 = {
      [ne.required]: _0x32ff2f.required
    };
    if (_0x2902c0 !== _0x5ae248._v$) {
      _0x2cedb7(_0x811635, _0x5ae248._v$ = _0x2902c0);
    }
    if (_0x265aae !== _0x5ae248._v$2) {
      _0x2cedb7(_0x580f97, _0x5ae248._v$2 = _0x265aae);
    }
    if (_0x4c3ba3 !== _0x5ae248._v$3) {
      _0x2cedb7(_0x198844, _0x5ae248._v$3 = _0x4c3ba3);
    }
    _0x5ae248._v$4 = _0x42b1a6(_0x1bb5ed, _0x3f92e9, _0x5ae248._v$4);
    return _0x5ae248;
  }, {
    _v$: undefined,
    _v$2: undefined,
    _v$3: undefined,
    _v$4: undefined
  });
  return _0x811635;
})();
const Mt = _0xbfb562("<div class=\"flex w-full flex-row items-center justify-between\"><div></div><div>Save");
const pt = _0xbfb562("<div class=\"flex w-full flex-col items-start justify-start gap-[1vh] overflow-auto\">");
const Dt = _0xbfb562("<div><div class=\"flex w-full flex-row items-center justify-between pt-[1vh]\">");
const Pt = () => {
  const {
    minerData: _0x39dd7e,
    setMinerData: _0x48e7b1,
    deskData: _0x4df368,
    setDeskData: _0xa1b2bd,
    nodes: _0x5a156c,
    edges: _0x5c2876
  } = we();
  const _0x5b2f3f = async () => {
    const _0x2cdce7 = await _0x262370.execute("miner:getData");
    _0x48e7b1(_0x2cdce7);
    const _0x48613f = await _0x262370.execute("miner:getDeskData");
    _0xa1b2bd(_0x48613f);
  };
  let _0x30ddb8;
  const [_0x1dcd83, _0x34c2dc] = _0x43b7db(0);
  const _0x584007 = _0x170f44(() => {
    const _0x583d41 = _0x4df368()?.propertyConsumptionRecords;
    if (!_0x583d41) {
      return;
    }
    const _0x214f3e = [];
    for (const _0x2da50a of _0x583d41) {
      _0x2da50a.cooling *= 2;
      const _0x145903 = Math.min(1, (_0x2da50a.cooling - _0x2da50a.heating / 2) / _0x2da50a.cooling);
      _0x214f3e.push(Math.round(_0x145903 * 100));
    }
    return {
      labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      datasets: [{
        label: "Cooling",
        data: _0x583d41.map(_0x4ae441 => _0x4ae441.cooling),
        backgroundColor: "#00F8B9",
        borderColor: "rgba(0, 248, 185, 0.4)"
      }, {
        label: "Heating",
        data: _0x583d41.map(_0x5fabfb => _0x5fabfb.heating),
        backgroundColor: "#F86969",
        borderColor: "rgba(248, 105, 105, 0.4)"
      }, {
        label: "Performance",
        data: _0x214f3e,
        backgroundColor: "#62FF3A",
        borderColor: "#397018"
      }]
    };
  });
  const _0x40f9d6 = {
    responsive: true,
    maintainAspectRatio: false,
    devicePixelRatio: window.devicePixelRatio,
    font: {
      family: "Gilroy",
      size: 12
    },
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.05)"
        }
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.05)"
        }
      }
    }
  };
  _0x758c13(async () => {
    _0x4da877.register(_0x351c2e, _0x1e18d8, _0x4a98d4, _0x38b255, _0x6a998b);
    await _0x5b2f3f();
    _0x30ddb8 = setInterval(() => {
      const _0x585124 = Date.now() / 1000;
      const _0x4139a6 = (_0x4df368()?.nextUpdate || _0x585124) - _0x585124;
      _0x34c2dc(_0x4139a6);
    }, 1000);
  });
  _0x56ffdd(() => {
    clearInterval(_0x30ddb8);
    _0x4da877.unregister(_0x351c2e, _0x1e18d8, _0x4a98d4, _0x38b255, _0x6a998b);
  });
  const _0xb809bd = _0x170f44(() => {
    const _0x17dce1 = _0x1dcd83();
    if (_0x17dce1 <= 0) {
      return "Calculating...";
    }
    const _0xbd99c8 = Math.floor(_0x17dce1 / 60);
    const _0x3b7e1a = Math.floor(_0x17dce1 % 60);
    return _0xbd99c8 + "m " + _0x3b7e1a + "s";
  });
  const _0x25276d = _0x194105 => _0x194105 * 0.01 * window.innerHeight;
  return (() => {
    const _0x4aaf05 = Dt();
    const _0x574e92 = _0x4aaf05.firstChild;
    _0x3d9290(_0x4aaf05, _0x15768c(_0x396e6, {
      get name() {
        return Lt.name;
      }
    }), _0x574e92);
    _0x3d9290(_0x4aaf05, _0x15768c(_0x5e9c07, {
      get when() {
        return _0x584007();
      },
      get children() {
        const _0x2f5d0e = Mt();
        const _0x71e031 = _0x2f5d0e.firstChild;
        const _0x5587f9 = _0x71e031.nextSibling;
        _0x3d9290(_0x71e031, _0x15768c(_0x2e3741, {
          get data() {
            return _0x584007();
          },
          options: _0x40f9d6,
          get width() {
            return _0x25276d(76.29);
          },
          get height() {
            return _0x25276d(10.5);
          }
        }));
        _0x5587f9.$$click = async () => {
          const _0x229326 = {};
          for (const _0x241dcd of _0x5a156c()) {
            if (!_0x241dcd.data.fixed) {
              const _0x385166 = _0x5c2876().find(_0x36bb25 => _0x36bb25.sourceNode === _0x241dcd.id);
              _0x229326[_0x241dcd.id] = _0x385166?.targetNode ?? null;
            }
          }
          for (const _0x1b63a8 of _0x5c2876()) {
            _0x229326[_0x1b63a8.sourceNode] = _0x1b63a8.targetNode;
          }
          if (await _0x262370.execute("miner:link:save", _0x229326)) {
            _0x4be729("miner-ext", "Successfully linked racks");
          } else {
            _0x4be729("miner-ext", "Failed to link racks");
          }
        };
        _0x435834(() => _0x2cedb7(_0x5587f9, ve.saveButton));
        return _0x2f5d0e;
      }
    }), _0x574e92);
    _0x3d9290(_0x4aaf05, _0x15768c(_0x5e9c07, {
      get when() {
        return _0x4df368();
      },
      get children() {
        const _0x2e393a = pt();
        _0x3d9290(_0x2e393a, _0x15768c(Ct, {}));
        return _0x2e393a;
      }
    }), _0x574e92);
    _0x3d9290(_0x574e92, _0x15768c(z, {
      icon: "fas fa-coin",
      label: "Income",
      get text() {
        if (_0x170f44(() => !!_0x4df368())()) {
          return _0x4df368()?.income?.toFixed(2) + "/" + _0x4df368()?.bestIncome?.toFixed(2);
        } else {
          return "0";
        }
      }
    }), null);
    _0x3d9290(_0x574e92, _0x15768c(z, {
      icon: "fas fa-coin",
      label: "Pending",
      get text() {
        return _0x39dd7e()?.pending_ext?.toFixed(5);
      }
    }), null);
    _0x3d9290(_0x574e92, _0x15768c(z, {
      icon: "fa-regular fa-timer",
      label: "Next Update",
      get text() {
        return _0xb809bd();
      }
    }), null);
    _0x3d9290(_0x574e92, _0x15768c(z, {
      icon: "fa-solid fa-server",
      label: "Racks",
      get text() {
        return _0x4df368()?.totalRacks.length + "x";
      }
    }), null);
    _0x3d9290(_0x574e92, _0x15768c(z, {
      icon: "fa-solid fa-link-horizontal",
      label: "Linked Racks",
      get text() {
        return _0x4df368()?.linkedRacks + "x";
      }
    }), null);
    _0x3d9290(_0x574e92, _0x15768c(z, {
      icon: "fa-solid fa-computer",
      label: "Desks",
      get text() {
        return _0x4df368()?.totalDesks.length + "x";
      }
    }), null);
    _0x435834(() => _0x2cedb7(_0x4aaf05, ve.container));
    return _0x4aaf05;
  })();
};
_0x12a83a(["click"]);
const [It, St] = _0xd55723(() => {
  const [_0x44b0d6, _0x230b6a] = _0x43b7db(null);
  const [_0x42f6f0, _0x21d981] = _0x43b7db(null);
  const [_0x342e59, _0x4461f2] = _0x43b7db([]);
  const [_0xb36474, _0x426609] = _0x43b7db([]);
  return {
    minerData: _0x44b0d6,
    setMinerData: _0x230b6a,
    deskData: _0x42f6f0,
    setDeskData: _0x21d981,
    nodes: _0x342e59,
    setNodes: _0x4461f2,
    edges: _0xb36474,
    setEdges: _0x426609
  };
});
const we = () => St();
const Bt = () => _0x15768c(It, {
  get children() {
    return _0x15768c(Pt, {});
  }
});
const Rt = "" + new URL("miner-ext-icon-e0c6851f.png", import.meta.url).href;
const Lt = {
  icon: Rt,
  enabled: true,
  onDock: false,
  name: "miner-ext",
  label: "MinerEXT",
  description: "Mining rack setup.",
  isEnabled: true,
  isLaptop: true,
  requiresVPN: true,
  render: () => _0x15768c(Bt, {})
};
export { Lt as default };
