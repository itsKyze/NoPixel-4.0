import { ag as _0x10dc54, a as _0x3d8ed7, c as _0x18bedd, m as _0x1608c8, e as _0x1bd320, f as _0x723af4, w as _0x524967, M as _0x2f08f4, x as _0x57a51a, j as _0x120017, k as _0x3cbd01, l as _0x55c79c, y as _0x1afe4e, t as _0x2a2e4c, S as _0x30779a, J as _0x3af141, aJ as _0xc6f1d6, G as _0x5dae5c, s as _0x3cad0a, b as _0xaeb35c, o as _0x55d9ba, Q as _0x38d9dc, n as _0x58ac5a, ai as _0x2f3c0a, ak as _0x527f11 } from "./vendor-c69496a3.js";
import { A as _0x1d868a } from "./index-3eb10154.js";
import { d as _0x53c1cb, b as _0x2d5c88 } from "./vite-1e207deb.js";
import { N as _0x548466 } from "./v-packages-3113361c.js";
import "./commonjsHelpers-725317a4.js";
const ye = {
  noFilter: {
    icon: "fa-solid fa-sliders-up",
    text: "No Filter",
    active: [{
      icon: "fa-solid fa-arrow-up-1-9"
    }, {
      icon: "fa-solid fa-arrow-up-9-1"
    }]
  },
  price: {
    icon: "fa-solid fa-tag",
    text: "Price",
    active: [{
      icon: "fa-solid fa-arrow-up-1-9"
    }, {
      icon: "fa-solid fa-arrow-up-9-1"
    }]
  },
  garage: {
    icon: "fa-solid fa-car-garage",
    text: "Garage",
    active: [{
      icon: "fa-solid fa-arrow-up-1-9"
    }, {
      icon: "fa-solid fa-arrow-up-9-1"
    }]
  },
  size: {
    icon: "fa-solid fa-maximize",
    text: "Size",
    active: [{
      icon: "fa-solid fa-arrow-up-1-9"
    }, {
      icon: "fa-solid fa-arrow-up-9-1"
    }]
  }
};
const [we, be] = _0x10dc54(() => {
  const [_0x3d2194, _0x3b8f3e] = _0x3d8ed7("home");
  const [_0x152b68, _0xb31f71] = _0x18bedd([]);
  const [_0x465048, _0x1a9b89] = _0x3d8ed7(null);
  const [_0x5b8746, _0x3caa75] = _0x3d8ed7(false);
  const [_0x543bd4, _0x492e52] = _0x3d8ed7("");
  const [_0x306d49, _0x3d499d] = _0x3d8ed7(null);
  const [_0x4cb40f, _0x19fff1] = _0x3d8ed7(null);
  const [_0x5571f9, _0x2e676f] = _0x3d8ed7(false);
  const [_0x455473, _0x1efed9] = _0x3d8ed7(null);
  const [_0x54e28a, _0x574425] = _0x3d8ed7(0);
  return {
    page: _0x3d2194,
    setPage: _0x3b8f3e,
    properties: _0x152b68,
    setProperties: _0xb31f71,
    localProperty: _0x465048,
    setLocalProperty: _0x1a9b89,
    isRealtor: _0x5b8746,
    setIsRealtor: _0x3caa75,
    searchText: _0x543bd4,
    setSearchText: _0x492e52,
    currentProperty: _0x306d49,
    setCurrentProperty: _0x3d499d,
    input: _0x4cb40f,
    setInput: _0x19fff1,
    isPD: _0x5571f9,
    setIsPD: _0x2e676f,
    activeFilter: _0x455473,
    setActiveFilter: _0x1efed9,
    activeOrder: _0x54e28a,
    setActiveOrder: _0x574425
  };
});
const T = () => be();
const Se = "_container_1g380_1";
const xe = {
  container: Se
};
const Ce = "_container_1y5o0_1";
const Pe = "_filterButton_1y5o0_40";
const ke = "_active_1y5o0_65";
const Ae = "_searchBar_1y5o0_77";
const te = {
  container: Ce,
  filterButton: Pe,
  active: ke,
  searchBar: Ae
};
const Oe = _0x2a2e4c("<div><div class=\"flex flex-col items-start justify-start\"><h1>REAL ESTATE</h1><h2>EXPLORE PROPERTIES</div><div class=\"mr-[auto] flex flex-col items-start justify-center gap-[0.5vh]\"><p>Sort Properties by</p><div class=\"flex flex-row items-center justify-between gap-[1vh]\"></div><p>Sort by price, garage and size.</div><div><input type=\"text\" placeholder=\"Search for a property\"><i class=\"fa-solid fa-magnifying-glass\">");
const ie = _0x2a2e4c("<i>");
const De = _0x2a2e4c("<div><p>");
const Ie = () => {
  const {
    searchText: _0x5543ae,
    setSearchText: _0x49b9b1,
    activeFilter: _0x2d5c6e,
    setActiveFilter: _0x41ec13,
    setActiveOrder: _0x1ce38e,
    activeOrder: _0x227e5f
  } = T();
  let _0x29f38e;
  return (() => {
    const _0x19943c = Oe();
    const _0x3cea86 = _0x19943c.firstChild;
    const _0x499a8d = _0x3cea86.nextSibling;
    const _0x4818f1 = _0x499a8d.firstChild;
    const _0x22aa51 = _0x4818f1.nextSibling;
    const _0x396178 = _0x499a8d.nextSibling;
    const _0x1cac21 = _0x396178.firstChild;
    _0x1bd320(_0x22aa51, _0x723af4(_0x1afe4e, {
      get each() {
        return Object.entries(ye);
      },
      children: ([_0x4d4815, _0x806b7c]) => (() => {
        const _0x39e459 = De();
        const _0x397933 = _0x39e459.firstChild;
        _0x39e459.$$click = () => {
          _0x41ec13(_0x4d4815);
          if (_0x2d5c6e() !== "noFilter") {
            _0x1ce38e(_0x227e5f() === 0 ? 1 : 0);
          }
        };
        _0x1bd320(_0x39e459, _0x723af4(_0x524967, {
          get children() {
            return [_0x723af4(_0x2f08f4, {
              get when() {
                return _0x57a51a(() => _0x2d5c6e() !== "noFilter" && _0x2d5c6e() === _0x4d4815)() && _0x227e5f() === 0;
              },
              get children() {
                const _0x598740 = ie();
                _0x120017(() => _0x3cbd01(_0x598740, _0x806b7c.active?.[0].icon));
                return _0x598740;
              }
            }), _0x723af4(_0x2f08f4, {
              get when() {
                return _0x57a51a(() => _0x2d5c6e() !== "noFilter" && _0x2d5c6e() === _0x4d4815)() && _0x227e5f() === 1;
              },
              get children() {
                const _0x48ab1b = ie();
                _0x120017(() => _0x3cbd01(_0x48ab1b, _0x806b7c.active?.[1].icon));
                return _0x48ab1b;
              }
            }), _0x723af4(_0x2f08f4, {
              when: true,
              get children() {
                const _0x59ef63 = ie();
                _0x120017(() => _0x3cbd01(_0x59ef63, _0x806b7c.icon));
                return _0x59ef63;
              }
            })];
          }
        }), _0x397933);
        _0x1bd320(_0x397933, () => _0x806b7c.text);
        _0x120017(_0x48e8bf => {
          const _0x556841 = te.filterButton;
          const _0x4c032a = {
            [te.active]: _0x2d5c6e() === _0x4d4815
          };
          if (_0x556841 !== _0x48e8bf._v$3) {
            _0x3cbd01(_0x39e459, _0x48e8bf._v$3 = _0x556841);
          }
          _0x48e8bf._v$4 = _0x55c79c(_0x39e459, _0x4c032a, _0x48e8bf._v$4);
          return _0x48e8bf;
        }, {
          _v$3: undefined,
          _v$4: undefined
        });
        return _0x39e459;
      })()
    }));
    _0x1cac21.$$input = _0xc1e4e7 => {
      const _0x4acf31 = _0xc1e4e7.currentTarget.value;
      clearTimeout(_0x29f38e);
      _0x29f38e = setTimeout(() => {
        _0x49b9b1(_0x4acf31);
      }, 300);
      _0xc1e4e7.preventDefault();
    };
    _0x120017(_0x2a6aaf => {
      const _0x1bd813 = te.container;
      const _0xbaa1bd = te.searchBar;
      if (_0x1bd813 !== _0x2a6aaf._v$) {
        _0x3cbd01(_0x19943c, _0x2a6aaf._v$ = _0x1bd813);
      }
      if (_0xbaa1bd !== _0x2a6aaf._v$2) {
        _0x3cbd01(_0x396178, _0x2a6aaf._v$2 = _0xbaa1bd);
      }
      return _0x2a6aaf;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    _0x120017(() => _0x1cac21.value = _0x5543ae());
    return _0x19943c;
  })();
};
_0x1608c8(["input", "click"]);
const Be = "_container_16mr5_1";
const Le = "_closest_16mr5_41";
const Ee = "_button_16mr5_45";
const Te = "_isOwner_16mr5_49";
const je = "_imageContainer_16mr5_58";
const Re = "_tag_16mr5_77";
const ze = "_info_16mr5_98";
const Fe = "_title_16mr5_119";
const Me = "_description_16mr5_127";
const qe = "_price_16mr5_135";
const R = {
  container: Be,
  closest: Le,
  button: Ee,
  isOwner: Te,
  imageContainer: je,
  tag: Re,
  info: ze,
  title: Fe,
  description: Me,
  price: qe
};
const Ge = _0x2a2e4c("<div><p>View Auction");
const Ve = _0x2a2e4c("<div><p>Info");
const Ne = _0x2a2e4c("<div><div><div class=\"flex flex-row items-start justify-start gap-[0.5vh]\"><div><i class=\"fa-solid fa-map-location\"></i></div><div></div></div><div>#</div></div><div class=\"flex w-full flex-col items-center justify-start gap-[0.5vh]\"></div><div class=\"flex w-full flex-row items-center justify-between\"><div class=\"flex flex-col items-start justify-start gap-[0.5vh]\"><div>Size</div><div> ft</div></div><div class=\"flex flex-col items-start justify-start\"><div>Price</div><div>$");
const Ue = _0x2a2e4c("<div><div class=\"flex flex-row items-center justify-start gap-[0.5vh]\"><i></i></div><p>");
const He = _0x3b8b11 => {
  const {
    localProperty: _0x7fd9d8,
    isRealtor: _0x4d4b59,
    setPage: _0x52fa04,
    setCurrentProperty: _0x1aa0ea
  } = T();
  const _0x55aa76 = _0x57a51a(() => Object.keys(_0x3b8b11).filter(_0x30665e => _0x30665e.includes("garage")));
  const _0x347727 = _0x57a51a(() => {
    const _0x5bbc45 = [{
      label: "Zone",
      icon: "fa-solid fa-map-location-dot",
      value: _0x3b8b11.zone
    }, {
      label: "Type",
      icon: "fa-solid fa-tag",
      value: _0x3b8b11.type
    }, {
      label: "Garage Slots",
      icon: "fa-solid fa-car-garage",
      value: _0x55aa76().length
    }, {
      label: "Angle",
      icon: "fa-solid fa-angle",
      value: _0x3b8b11.angle
    }, {
      label: "Market Price",
      icon: "fa-solid fa-money-check-dollar-pen",
      value: "$" + _0x3b8b11.activeSale?.price?.toLocaleString()
    }];
    if (_0x3b8b11.activeSale?.isAuction) {
      const _0x300fa1 = _0x3b8b11.activeSale?.endTime;
      _0x5bbc45.push({
        label: "Auction End",
        icon: "fa-solid fa-clock",
        value: new Date(_0x300fa1 ? _0x300fa1 * 1000 : 0).toLocaleString()
      });
    }
    if (_0x4d4b59()) {
      _0x5bbc45.push({
        label: "Owner",
        icon: "fa-solid fa-user",
        value: _0x3b8b11.owner
      });
    }
    return _0x5bbc45;
  });
  const _0x5e0ec3 = _0x57a51a(() => _0x7fd9d8() === _0x3b8b11.address);
  const _0x42d785 = _0x57a51a(() => _0x53c1cb()?.cid === +_0x3b8b11.owner);
  const _0x14aff1 = async _0x52aacb => {
    if (!_0x52aacb) {
      return;
    }
    const _0x325e7d = await _0x548466.execute("housing:setGPSLocation", {
      info: _0x52aacb
    });
    _0x2d5c88("real_estate", "Marked GPS with property location");
    return _0x325e7d.data;
  };
  return (() => {
    const _0x2c9c94 = Ne();
    const _0x3f841d = _0x2c9c94.firstChild;
    const _0xeb178c = _0x3f841d.firstChild;
    const _0x3d0921 = _0xeb178c.firstChild;
    const _0x349044 = _0x3d0921.nextSibling;
    const _0x240c66 = _0xeb178c.nextSibling;
    _0x240c66.firstChild;
    const _0x2751a6 = _0x3f841d.nextSibling;
    const _0x41201d = _0x2751a6.nextSibling;
    const _0x1f6545 = _0x41201d.firstChild;
    const _0x52e533 = _0x1f6545.firstChild;
    const _0x4b76f9 = _0x52e533.nextSibling;
    const _0xd17db0 = _0x4b76f9.firstChild;
    const _0x51decc = _0x1f6545.nextSibling;
    const _0x259cc7 = _0x51decc.firstChild;
    const _0x28a826 = _0x259cc7.nextSibling;
    _0x28a826.firstChild;
    _0x3f841d.$$click = () => _0x14aff1(_0x3b8b11);
    _0x1bd320(_0x349044, () => _0x3b8b11.street);
    _0x1bd320(_0x240c66, () => _0x3b8b11.number, null);
    _0x1bd320(_0x2751a6, _0x723af4(_0x1afe4e, {
      get each() {
        return _0x347727();
      },
      children: _0x4968fc => (() => {
        const _0x5e1cd0 = Ue();
        const _0x3eb6a1 = _0x5e1cd0.firstChild;
        const _0xea3661 = _0x3eb6a1.firstChild;
        const _0x406a13 = _0x3eb6a1.nextSibling;
        _0x1bd320(_0x3eb6a1, () => _0x4968fc.label, null);
        _0x1bd320(_0x406a13, () => _0x4968fc.value);
        _0x120017(_0x27592f => {
          const _0xde6bc5 = R.info;
          const _0x6ba860 = _0x4968fc.icon;
          if (_0xde6bc5 !== _0x27592f._v$12) {
            _0x3cbd01(_0x5e1cd0, _0x27592f._v$12 = _0xde6bc5);
          }
          if (_0x6ba860 !== _0x27592f._v$13) {
            _0x3cbd01(_0xea3661, _0x27592f._v$13 = _0x6ba860);
          }
          return _0x27592f;
        }, {
          _v$12: undefined,
          _v$13: undefined
        });
        return _0x5e1cd0;
      })()
    }));
    _0x1bd320(_0x4b76f9, () => (+_0x3b8b11.size).toLocaleString(), _0xd17db0);
    _0x1bd320(_0x28a826, () => (_0x3b8b11.activeSale?.forSalePrice ?? _0x3b8b11.activeSale?.price)?.toLocaleString(), null);
    _0x1bd320(_0x2c9c94, _0x723af4(_0x30779a, {
      get when() {
        return _0x3b8b11.activeSale?.isAuction;
      },
      get children() {
        const _0x933889 = Ge();
        _0x933889.$$click = () => {
          _0x52fa04("details");
          _0x1aa0ea(_0x3b8b11);
        };
        _0x120017(() => _0x3cbd01(_0x933889, R.button));
        return _0x933889;
      }
    }), null);
    _0x1bd320(_0x2c9c94, _0x723af4(_0x30779a, {
      get when() {
        return !_0x3b8b11.activeSale?.isAuction;
      },
      get children() {
        const _0x37d291 = Ve();
        _0x37d291.$$click = () => {
          _0x52fa04("details");
          _0x1aa0ea(_0x3b8b11);
        };
        _0x120017(() => _0x3cbd01(_0x37d291, R.button));
        return _0x37d291;
      }
    }), null);
    _0x120017(_0x340ceb => {
      const _0x30a19d = R.container;
      const _0x225c77 = {
        [R.closest]: _0x5e0ec3(),
        [R.isOwner]: _0x42d785()
      };
      const _0x465a3d = R.imageContainer;
      const _0x42628c = "url(" + _0x3b8b11.image + ")";
      const _0x16c3a4 = R.tag;
      const _0x152359 = R.tag;
      const _0x4bc62e = R.tag;
      const _0x231d9c = R.title;
      const _0x9ceac4 = R.description;
      const _0x3407c4 = R.title;
      const _0x8ba037 = R.price;
      if (_0x30a19d !== _0x340ceb._v$) {
        _0x3cbd01(_0x2c9c94, _0x340ceb._v$ = _0x30a19d);
      }
      _0x340ceb._v$2 = _0x55c79c(_0x2c9c94, _0x225c77, _0x340ceb._v$2);
      if (_0x465a3d !== _0x340ceb._v$3) {
        _0x3cbd01(_0x3f841d, _0x340ceb._v$3 = _0x465a3d);
      }
      if (_0x42628c !== _0x340ceb._v$4) {
        if ((_0x340ceb._v$4 = _0x42628c) != null) {
          _0x3f841d.style.setProperty("background-image", _0x42628c);
        } else {
          _0x3f841d.style.removeProperty("background-image");
        }
      }
      if (_0x16c3a4 !== _0x340ceb._v$5) {
        _0x3cbd01(_0x3d0921, _0x340ceb._v$5 = _0x16c3a4);
      }
      if (_0x152359 !== _0x340ceb._v$6) {
        _0x3cbd01(_0x349044, _0x340ceb._v$6 = _0x152359);
      }
      if (_0x4bc62e !== _0x340ceb._v$7) {
        _0x3cbd01(_0x240c66, _0x340ceb._v$7 = _0x4bc62e);
      }
      if (_0x231d9c !== _0x340ceb._v$8) {
        _0x3cbd01(_0x52e533, _0x340ceb._v$8 = _0x231d9c);
      }
      if (_0x9ceac4 !== _0x340ceb._v$9) {
        _0x3cbd01(_0x4b76f9, _0x340ceb._v$9 = _0x9ceac4);
      }
      if (_0x3407c4 !== _0x340ceb._v$10) {
        _0x3cbd01(_0x259cc7, _0x340ceb._v$10 = _0x3407c4);
      }
      if (_0x8ba037 !== _0x340ceb._v$11) {
        _0x3cbd01(_0x28a826, _0x340ceb._v$11 = _0x8ba037);
      }
      return _0x340ceb;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined,
      _v$8: undefined,
      _v$9: undefined,
      _v$10: undefined,
      _v$11: undefined
    });
    return _0x2c9c94;
  })();
};
_0x1608c8(["click"]);
const Ye = "_scroll_62m7r_1";
const Je = "_grid_62m7r_23";
const oe = {
  scroll: Ye,
  grid: Je
};
const We = _0x2a2e4c("<div>");
const Ke = _0x2a2e4c("<div><div>");
const Qe = _0x581fff => (() => {
  const _0x462276 = We();
  _0x1bd320(_0x462276, _0x723af4(He, _0x5dae5c(() => _0x581fff.item)));
  _0x120017(_0x53b2ad => _0x3cad0a(_0x462276, {
    ..._0x581fff.style
  }, _0x53b2ad));
  return _0x462276;
})();
const Xe = () => {
  const {
    properties: _0x236a16,
    localProperty: _0x99e384,
    searchText: _0x2ff8f2,
    setCurrentProperty: _0x565077,
    isRealtor: _0x9df55e,
    isPD: _0x558447,
    activeFilter: _0xa8dbea,
    activeOrder: _0x435028
  } = T();
  const _0x5576ef = _0x57a51a(() => [..._0x236a16].sort((_0x121901, _0x2322cb) => _0x121901.address === _0x99e384() ? -1 : _0x121901.activeSale && _0x121901.activeSale.isAuction ? 0 : _0xa8dbea() === "price" ? _0x435028() === 0 ? (_0x121901.activeSale?.price ?? 0) - (_0x2322cb.activeSale?.price ?? 0) : (_0x2322cb.activeSale?.price ?? 0) - (_0x121901.activeSale?.price ?? 0) : _0xa8dbea() === "garage" ? _0x435028() === 0 ? Object.keys(_0x121901).filter(_0x4bb420 => _0x4bb420.includes("garage")).length - Object.keys(_0x2322cb).filter(_0x4905cc => _0x4905cc.includes("garage")).length : Object.keys(_0x2322cb).filter(_0xac92b6 => _0xac92b6.includes("garage")).length - Object.keys(_0x121901).filter(_0x20fdc3 => _0x20fdc3.includes("garage")).length : _0xa8dbea() === "size" ? _0x435028() === 0 ? +_0x121901.size - +_0x2322cb.size : +_0x2322cb.size - +_0x121901.size : 0));
  const _0x42c450 = _0x674a01 => !!_0x558447() || !!_0x674a01.activeSale && !!_0x674a01.activeSale.isOnSale || !!_0x9df55e() || _0x53c1cb()?.cid == +_0x674a01.owner;
  const _0x48cb80 = _0x57a51a(() => _0x5576ef().filter(_0x5ce345 => _0x5ce345 ? (_0x2ff8f2() === "" || _0x5ce345.address.toLowerCase().includes(_0x2ff8f2().toLowerCase())) && _0x42c450(_0x5ce345) : false));
  _0x3af141(() => {
    _0x565077(null);
  });
  let _0x42d565;
  const _0x1c0b20 = _0x26cdd4 => _0x26cdd4 * 0.01 * window.innerHeight;
  return (() => {
    const _0x237cf9 = Ke();
    const _0x160e6e = _0x237cf9.firstChild;
    const _0x5c0fc7 = _0x42d565;
    if (typeof _0x5c0fc7 == "function") {
      _0xaeb35c(_0x5c0fc7, _0x160e6e);
    } else {
      _0x42d565 = _0x160e6e;
    }
    _0x1bd320(_0x160e6e, _0x723af4(_0xc6f1d6, {
      get items() {
        return _0x48cb80();
      },
      scrollTarget: _0x42d565,
      get itemSize() {
        return {
          height: _0x1c0b20(45),
          width: _0x1c0b20(27)
        };
      },
      crossAxisCount: _0x33a624 => Math.floor(4),
      overscan: 0,
      children: _0x47742b => _0x723af4(Qe, _0x47742b)
    }));
    _0x120017(_0x21aea7 => {
      const _0x3489cd = oe.scroll;
      const _0x2b3820 = oe.grid;
      if (_0x3489cd !== _0x21aea7._v$) {
        _0x3cbd01(_0x237cf9, _0x21aea7._v$ = _0x3489cd);
      }
      if (_0x2b3820 !== _0x21aea7._v$2) {
        _0x3cbd01(_0x160e6e, _0x21aea7._v$2 = _0x2b3820);
      }
      return _0x21aea7;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    return _0x237cf9;
  })();
};
const Ze = "_container_rck9f_1";
const et = "_view3d_rck9f_11";
const tt = "_status_rck9f_28";
const nt = "_bidstatus_rck9f_44";
const it = "_price_rck9f_57";
const rt = "_button_rck9f_75";
const k = {
  container: Ze,
  view3d: et,
  status: tt,
  bidstatus: nt,
  price: it,
  button: rt
};
const st = _0x2a2e4c("<div class=\"flex w-full flex-row items-center justify-between gap-[1vh]\"><div><p>Sell property</div><div><p>Put up for sale</div><div><p>Auction property</div><div><p>Transfer property");
const lt = _0x2a2e4c("<div><p>Remove from sale");
const ot = _0x2a2e4c("<div class=\"w-full grid grid-cols-2 gap-[1vh] mb-[1vh]\"><div><p class=\"text-xs text-gray-500\">Minimum bid</p><p>$</div><div><p class=\"text-xs text-gray-500\">Auction end</p><p></div><div><p class=\"text-xs text-gray-500\">Time until End</p><p></div><div><p class=\"text-xs text-gray-500\">Bids</p><p>");
const at = _0x2a2e4c("<div class=\"flex w-full\"><div><p class=\"text-xs text-gray-500\">Your bid</p><p>$</div><div><p>Withdraw bid");
const ct = _0x2a2e4c("<div class=\"flex w-full flex-row items-center justify-between gap-[1vh]\"><div><p>Bid on property</div><div><p>$");
const ut = _0x2a2e4c("<div class=\"flex w-full flex-row items-center justify-between gap-[1vh]\"><div><p>Purchase property</div><div><p>$");
const dt = _0x2a2e4c("<div class=\"flex w-full flex-row items-center justify-between gap-[1vh]\"><div><p>Seize property</div><div><p>Lockdown Property");
const vt = _0x2a2e4c("<div><div><img></div><div></div><div><p>Back to properties");
const ft = (_0xc376a3, _0x292f86) => _0x2f3c0a(_0xc376a3, async () => {
  const {
    setInput: _0x1aa626
  } = T();
  _0x1aa626({
    title: "Confirm",
    description: "Are you sure you want to purchase " + _0x292f86.address + "?",
    inputs: {},
    onConfirm: async () => {
      const _0x10abd6 = await _0x548466.execute("housing:buyProperty", {
        info: _0x292f86
      });
      _0x2d5c88("real_estate", _0x10abd6.message);
    }
  });
});
const _t = (_0x429ba5, _0x3a9588) => _0x2f3c0a(_0x429ba5, async () => {
  const {
    setInput: _0x473fe9
  } = T();
  _0x473fe9({
    title: "Confirm",
    description: "Are you sure you want to sell " + _0x3a9588.address + "? for 50% of the price you bought it for",
    inputs: {},
    onConfirm: async () => {
      const _0x4c26ea = await _0x548466.execute("housing:sellProperty", {
        info: _0x3a9588
      });
      _0x2d5c88("real_estate", _0x4c26ea.message);
    }
  });
});
const $t = (_0x293cd2, _0x1f655b) => _0x2f3c0a(_0x293cd2, async () => {
  const {
    input: _0x343d84,
    setInput: _0x208259
  } = T();
  _0x208259({
    title: "Confirm",
    description: "Are you sure you want to put for sale " + _0x1f655b.address + "?",
    inputs: {
      price: {
        value: "",
        placeholder: "Price"
      }
    },
    onConfirm: async () => {
      const _0x4a71fc = _0x343d84()?.inputs.price.value;
      const _0x262d07 = await _0x548466.execute("housing:putupforsale", {
        info: _0x1f655b,
        price: _0x4a71fc
      });
      _0x2d5c88("real_estate", _0x262d07.message);
    }
  });
});
const gt = (_0x2abaa9, _0x388075) => _0x2f3c0a(_0x2abaa9, async () => {
  const {
    input: _0x9dd33f,
    setInput: _0x57effd
  } = T();
  _0x57effd({
    title: "Confirm",
    description: "Are you sure you want to auction " + _0x388075.address + "? You cannot reverse this. Once it is up for auction, it will be sold to the highest bidder.",
    inputs: {
      minBid: {
        value: "",
        placeholder: "Minimum bid"
      }
    },
    onConfirm: async () => {
      const _0x1f74c9 = _0x9dd33f()?.inputs.minBid.value;
      if (!_0x1f74c9) {
        return;
      }
      const _0x149b25 = await _0x548466.execute("housing:auctionProperty", {
        info: _0x388075,
        minBid: +_0x1f74c9
      });
      _0x2d5c88("real_estate", _0x149b25.message);
    }
  });
});
const ht = (_0x3eb2ee, _0x1cfa2a) => _0x2f3c0a(_0x3eb2ee, async () => {
  const {
    setInput: _0x1f5a6f
  } = T();
  _0x1f5a6f({
    title: "Confirm",
    description: "Are you sure you want to remove " + _0x1cfa2a.address + " from sale?",
    inputs: {},
    onConfirm: async () => {
      const _0x450c38 = await _0x548466.execute("housing:removeFromSale", {
        info: _0x1cfa2a
      });
      _0x2d5c88("real_estate", _0x450c38.message);
    }
  });
});
const pt = (_0x529f37, _0x5044b4) => _0x2f3c0a(_0x529f37, async () => {
  const {
    input: _0x452a5b,
    setInput: _0x2de881
  } = T();
  _0x2de881({
    title: "Confirm",
    description: "Are you sure you want to transfer " + _0x5044b4.address + "?",
    inputs: {
      price: {
        value: (_0x5044b4.activeSale?.price || 0).toString(),
        placeholder: "Price"
      },
      targetCID: {
        value: "",
        placeholder: "Target CID"
      }
    },
    onConfirm: async () => {
      const _0x54e745 = _0x452a5b()?.inputs.price.value;
      const _0x5ba1d8 = _0x452a5b()?.inputs.targetCID.value ?? 0;
      const _0x406f4f = await _0x548466.execute("housing:transferProperty", {
        info: _0x5044b4,
        price: _0x54e745,
        targetCID: +_0x5ba1d8
      });
      _0x2d5c88("real_estate", _0x406f4f.message);
    }
  });
});
const mt = (_0x2486ef, _0x2ff496) => _0x2f3c0a(_0x2486ef, async () => {
  const {
    setInput: _0x4f7444
  } = T();
  _0x4f7444({
    title: "Confirm",
    description: "Are you sure you want to seize " + _0x2ff496.address + "?",
    inputs: {},
    onConfirm: async () => {
      const _0x470ddc = await _0x548466.execute("housing:seizeProperty", {
        info: _0x2ff496
      });
      _0x2d5c88("real_estate", _0x470ddc.message);
    }
  });
});
const yt = (_0x4640e2, _0x10077e) => _0x2f3c0a(_0x4640e2, async () => {
  const {
    setInput: _0x3e25f2
  } = T();
  _0x3e25f2({
    title: "Confirm",
    description: "Are you sure you want to lockdown " + _0x10077e.address + "?",
    inputs: {},
    onConfirm: async () => {
      const _0x40a3f8 = await _0x548466.execute("housing:lockdownProperty", {
        info: _0x10077e
      });
      if (!_0x40a3f8.pull) {
        return _0x2d5c88("real_estate", _0x40a3f8.message);
      }
      if (_0x40a3f8.lockedDown) {
        _0x2d5c88("real_estate", "Property has been locked down.");
      } else {
        _0x2d5c88("real_estate", "Property has been unlocked.");
      }
    }
  });
});
const wt = (_0x5597e8, _0x881ba4, _0x12e047, _0x3261dc) => _0x2f3c0a(_0x5597e8, async () => {
  const {
    input: _0xbf9127,
    setInput: _0x337d1e
  } = T();
  _0x337d1e({
    title: "Confirm",
    description: "Are you sure you want to bid on " + _0x881ba4.address + "?",
    inputs: {
      price: {
        type: "number",
        value: _0x12e047.toString(),
        placeholder: "Price",
        min: _0x12e047.toString()
      }
    },
    onConfirm: async () => {
      const _0x211da3 = _0xbf9127()?.inputs.price.value;
      if (!_0x211da3 || _0x12e047 > +_0x211da3) {
        return;
      }
      const [_0x2486f8, _0x3b4201] = await _0x548466.execute("housing:bidOnProperty", {
        address: _0x881ba4.address,
        price: +_0x211da3
      });
      _0x2d5c88("real_estate", _0x3b4201);
      if (_0x2486f8) {
        _0x3261dc(+_0x211da3);
      }
    }
  });
});
const bt = (_0x258271, _0x561776, _0x7d21ea) => _0x2f3c0a(_0x258271, async () => {
  const {
    setInput: _0x476b68
  } = T();
  _0x476b68({
    title: "Confirm",
    description: "Are you sure you want to withdraw your bid on " + _0x561776.address + "?",
    inputs: {},
    onConfirm: async () => {
      const [_0x33b02f, _0x1a1936] = await _0x548466.execute("housing:withdrawBid", {
        address: _0x561776.address
      });
      _0x2d5c88("real_estate", _0x1a1936);
      console.log("withdrawBid", _0x33b02f, _0x1a1936);
      if (_0x33b02f) {
        _0x7d21ea(0);
      }
    }
  });
});
const St = () => {
  const {
    currentProperty: _0x5467c9,
    setPage: _0x626e7e,
    isPD: _0x451acd
  } = T();
  const [_0x1925e4, _0x573e87] = _0x3d8ed7(null);
  const [_0x2bed62, _0x2be8a3] = _0x3d8ed7("");
  const _0x5159e3 = _0x57a51a(() => _0x5467c9()?.owner == _0x53c1cb()?.cid);
  const _0x1ea9a4 = _0x57a51a(() => _0x5467c9()?.activeSale?.isAuction);
  const _0x25a0bf = _0x57a51a(() => _0x1925e4() ? (_0x1925e4()?.bids?.ownBid ?? 0) > 0 ? (_0x1925e4()?.bids?.ownBid ?? 0) + 10000 : _0x1925e4()?.auctionData?.current_price ?? 0 : 0);
  let _0xe464d;
  _0x3af141(() => {
    _0xe464d = setInterval(() => {
      const _0x44dade = (_0x1925e4()?.auctionData?.end_time ?? 0) * 1000;
      const _0x1922ae = Date.now();
      const _0x1a5b6b = _0x44dade - _0x1922ae;
      const _0x252645 = Math.floor(_0x1a5b6b / 3600000);
      const _0x479c56 = Math.floor(_0x1a5b6b % 3600000 / 60000);
      const _0x45ba92 = Math.floor(_0x1a5b6b % 60000 / 1000);
      const _0x2be6ab = _0x252645.toString().padStart(2, "0");
      const _0x12296b = _0x479c56.toString().padStart(2, "0");
      const _0x254d14 = _0x45ba92.toString().padStart(2, "0");
      _0x2be8a3(_0x2be6ab + ":" + _0x12296b + ":" + _0x254d14);
    }, 1000);
  });
  _0x55d9ba(() => {
    clearInterval(_0xe464d);
  });
  _0x38d9dc(async () => {
    const _0x19ec3e = await _0x548466.execute("housing:getAuctionData", {
      address: _0x5467c9()?.address
    });
    _0x573e87(_0x19ec3e);
  }, [_0x5467c9()]);
  const _0x5e51f3 = _0x66bc10 => _0x5467c9()?.activeSale && _0x5467c9()?.activeSale?.isOnSale ? _0x5467c9()?.activeSale?.forSalePrice && !_0x66bc10 ? "" + _0x53c1cb()?.cid != _0x5467c9()?.owner : true : false;
  const _0x52adfc = () => _0x5467c9()?.activeSale && _0x5467c9()?.activeSale?.isOnSale && _0x5467c9()?.activeSale?.forSalePrice ? (_0x5467c9()?.activeSale?.forSalePrice ?? 0) > 0 : false;
  const _0x5f36f7 = _0x25bebe => {
    console.log("updateBid", _0x25bebe);
    _0x573e87(_0x3714ff => _0x3714ff ? {
      ..._0x3714ff,
      bids: {
        count: _0x25bebe == 0 ? _0x3714ff.bids.count - 1 : _0x3714ff.bids.count + 1,
        ownBid: _0x25bebe
      }
    } : null);
  };
  const _0x2863ce = _0x527f11();
  return (() => {
    const _0x4f8b62 = vt();
    const _0xd61d09 = _0x4f8b62.firstChild;
    const _0x159c7a = _0xd61d09.firstChild;
    const _0x1424a3 = _0xd61d09.nextSibling;
    const _0x5168b8 = _0x1424a3.nextSibling;
    _0x58ac5a(_0x159c7a, "draggable", false);
    _0x1bd320(_0x1424a3, _0x723af4(_0x524967, {
      get children() {
        return [_0x723af4(_0x2f08f4, {
          get when() {
            return _0x5159e3();
          },
          children: "You own this property"
        }), _0x723af4(_0x2f08f4, {
          get when() {
            return !_0x5159e3();
          },
          children: "You don't own this property"
        })];
      }
    }));
    _0x1bd320(_0x4f8b62, _0x723af4(_0x30779a, {
      get when() {
        return _0x57a51a(() => !_0x5e51f3(false))() && "" + _0x53c1cb()?.cid == _0x5467c9()?.owner;
      },
      get children() {
        const _0x519edf = st();
        const _0xd16770 = _0x519edf.firstChild;
        const _0x579e2f = _0xd16770.nextSibling;
        const _0x51669e = _0x579e2f.nextSibling;
        const _0x3142c6 = _0x51669e.nextSibling;
        _0xd16770.$$click = () => _0x2863ce && _t(_0x2863ce, _0x5467c9());
        _0x579e2f.$$click = () => _0x2863ce && $t(_0x2863ce, _0x5467c9());
        _0x51669e.$$click = () => _0x2863ce && gt(_0x2863ce, _0x5467c9());
        _0x3142c6.$$click = () => _0x2863ce && pt(_0x2863ce, _0x5467c9());
        _0x120017(_0x5ec290 => {
          const _0x1a3549 = k.button;
          const _0x2ee84d = k.button;
          const _0x839a69 = k.button;
          const _0xb1a308 = k.button;
          if (_0x1a3549 !== _0x5ec290._v$) {
            _0x3cbd01(_0xd16770, _0x5ec290._v$ = _0x1a3549);
          }
          if (_0x2ee84d !== _0x5ec290._v$2) {
            _0x3cbd01(_0x579e2f, _0x5ec290._v$2 = _0x2ee84d);
          }
          if (_0x839a69 !== _0x5ec290._v$3) {
            _0x3cbd01(_0x51669e, _0x5ec290._v$3 = _0x839a69);
          }
          if (_0xb1a308 !== _0x5ec290._v$4) {
            _0x3cbd01(_0x3142c6, _0x5ec290._v$4 = _0xb1a308);
          }
          return _0x5ec290;
        }, {
          _v$: undefined,
          _v$2: undefined,
          _v$3: undefined,
          _v$4: undefined
        });
        return _0x519edf;
      }
    }), _0x5168b8);
    _0x1bd320(_0x4f8b62, _0x723af4(_0x30779a, {
      get when() {
        return _0x57a51a(() => !!_0x52adfc())() && "" + _0x53c1cb()?.cid == _0x5467c9()?.owner;
      },
      get children() {
        const _0x5e7a0d = lt();
        _0x5e7a0d.$$click = () => _0x2863ce && ht(_0x2863ce, _0x5467c9());
        _0x120017(() => _0x3cbd01(_0x5e7a0d, k.button));
        return _0x5e7a0d;
      }
    }), _0x5168b8);
    _0x1bd320(_0x4f8b62, _0x723af4(_0x30779a, {
      get when() {
        return _0x1ea9a4();
      },
      get children() {
        return [(() => {
          const _0x1dae2e = ot();
          const _0x48f296 = _0x1dae2e.firstChild;
          const _0x357d62 = _0x48f296.firstChild;
          const _0xbfdbf9 = _0x357d62.nextSibling;
          _0xbfdbf9.firstChild;
          const _0x659256 = _0x48f296.nextSibling;
          const _0x2c7849 = _0x659256.firstChild;
          const _0x170f03 = _0x2c7849.nextSibling;
          const _0x46b6de = _0x659256.nextSibling;
          const _0x183576 = _0x46b6de.firstChild;
          const _0x570639 = _0x183576.nextSibling;
          const _0x55da39 = _0x46b6de.nextSibling;
          const _0x219c4f = _0x55da39.firstChild;
          const _0x144cd5 = _0x219c4f.nextSibling;
          _0x1bd320(_0xbfdbf9, () => _0x1925e4()?.auctionData?.current_price.toLocaleString(), null);
          _0x1bd320(_0x170f03, () => new Date((_0x1925e4()?.auctionData?.end_time ?? 0) * 1000).toLocaleString());
          _0x1bd320(_0x570639, _0x2bed62);
          _0x1bd320(_0x144cd5, () => _0x1925e4()?.bids?.count ?? 0);
          _0x120017(_0x289e74 => {
            const _0x21424d = k.bidstatus;
            const _0x235747 = k.bidstatus;
            const _0x4cad1f = k.bidstatus;
            const _0x1d5022 = k.bidstatus;
            if (_0x21424d !== _0x289e74._v$5) {
              _0x3cbd01(_0x48f296, _0x289e74._v$5 = _0x21424d);
            }
            if (_0x235747 !== _0x289e74._v$6) {
              _0x3cbd01(_0x659256, _0x289e74._v$6 = _0x235747);
            }
            if (_0x4cad1f !== _0x289e74._v$7) {
              _0x3cbd01(_0x46b6de, _0x289e74._v$7 = _0x4cad1f);
            }
            if (_0x1d5022 !== _0x289e74._v$8) {
              _0x3cbd01(_0x55da39, _0x289e74._v$8 = _0x1d5022);
            }
            return _0x289e74;
          }, {
            _v$5: undefined,
            _v$6: undefined,
            _v$7: undefined,
            _v$8: undefined
          });
          return _0x1dae2e;
        })(), _0x723af4(_0x30779a, {
          get when() {
            return (_0x1925e4()?.bids?.ownBid ?? 0) > 0;
          },
          get children() {
            const _0x4ea0c6 = at();
            const _0x1b17b1 = _0x4ea0c6.firstChild;
            const _0x5ecf30 = _0x1b17b1.firstChild;
            const _0x26d649 = _0x5ecf30.nextSibling;
            _0x26d649.firstChild;
            const _0x3f793d = _0x1b17b1.nextSibling;
            _0x1bd320(_0x26d649, () => _0x1925e4()?.bids?.ownBid?.toLocaleString() ?? 0, null);
            _0x3f793d.$$click = () => _0x2863ce && bt(_0x2863ce, _0x5467c9(), _0x5f36f7);
            _0x120017(_0x334a95 => {
              const _0x12968f = k.bidstatus;
              const _0x42887a = k.button;
              if (_0x12968f !== _0x334a95._v$9) {
                _0x3cbd01(_0x1b17b1, _0x334a95._v$9 = _0x12968f);
              }
              if (_0x42887a !== _0x334a95._v$10) {
                _0x3cbd01(_0x3f793d, _0x334a95._v$10 = _0x42887a);
              }
              return _0x334a95;
            }, {
              _v$9: undefined,
              _v$10: undefined
            });
            return _0x4ea0c6;
          }
        }), (() => {
          const _0xb5390 = ct();
          const _0x34e46f = _0xb5390.firstChild;
          const _0x50e521 = _0x34e46f.nextSibling;
          const _0x31f032 = _0x50e521.firstChild;
          _0x31f032.firstChild;
          _0x34e46f.$$click = () => _0x2863ce && wt(_0x2863ce, _0x5467c9(), _0x25a0bf(), _0x5f36f7);
          _0x1bd320(_0x31f032, () => _0x25a0bf().toLocaleString(), null);
          _0x120017(_0x3a3796 => {
            const _0xbdc4f1 = k.button;
            const _0x1219e8 = k.price;
            if (_0xbdc4f1 !== _0x3a3796._v$11) {
              _0x3cbd01(_0x34e46f, _0x3a3796._v$11 = _0xbdc4f1);
            }
            if (_0x1219e8 !== _0x3a3796._v$12) {
              _0x3cbd01(_0x50e521, _0x3a3796._v$12 = _0x1219e8);
            }
            return _0x3a3796;
          }, {
            _v$11: undefined,
            _v$12: undefined
          });
          return _0xb5390;
        })()];
      }
    }), _0x5168b8);
    _0x1bd320(_0x4f8b62, _0x723af4(_0x30779a, {
      get when() {
        return _0x57a51a(() => !_0x1ea9a4())() && _0x5e51f3(false);
      },
      get children() {
        const _0x363494 = ut();
        const _0x2e5909 = _0x363494.firstChild;
        const _0x2b3076 = _0x2e5909.nextSibling;
        const _0x440a4c = _0x2b3076.firstChild;
        _0x440a4c.firstChild;
        _0x2e5909.$$click = () => _0x2863ce && ft(_0x2863ce, _0x5467c9());
        _0x1bd320(_0x440a4c, () => (_0x5467c9()?.activeSale?.forSalePrice ?? _0x5467c9()?.activeSale?.price)?.toLocaleString(), null);
        _0x120017(_0x2264e4 => {
          const _0x3d8c11 = k.button;
          const _0x4f1913 = k.price;
          if (_0x3d8c11 !== _0x2264e4._v$13) {
            _0x3cbd01(_0x2e5909, _0x2264e4._v$13 = _0x3d8c11);
          }
          if (_0x4f1913 !== _0x2264e4._v$14) {
            _0x3cbd01(_0x2b3076, _0x2264e4._v$14 = _0x4f1913);
          }
          return _0x2264e4;
        }, {
          _v$13: undefined,
          _v$14: undefined
        });
        return _0x363494;
      }
    }), _0x5168b8);
    _0x1bd320(_0x4f8b62, _0x723af4(_0x30779a, {
      get when() {
        return _0x57a51a(() => !_0x5e51f3(false))() && _0x451acd();
      },
      get children() {
        const _0x5bdd70 = dt();
        const _0x4638b8 = _0x5bdd70.firstChild;
        const _0x4c7912 = _0x4638b8.nextSibling;
        _0x4638b8.$$click = () => _0x2863ce && mt(_0x2863ce, _0x5467c9());
        _0x4c7912.$$click = () => _0x2863ce && yt(_0x2863ce, _0x5467c9());
        _0x120017(_0x1bb505 => {
          const _0x36edf8 = k.button;
          const _0x435d2b = k.button;
          if (_0x36edf8 !== _0x1bb505._v$15) {
            _0x3cbd01(_0x4638b8, _0x1bb505._v$15 = _0x36edf8);
          }
          if (_0x435d2b !== _0x1bb505._v$16) {
            _0x3cbd01(_0x4c7912, _0x1bb505._v$16 = _0x435d2b);
          }
          return _0x1bb505;
        }, {
          _v$15: undefined,
          _v$16: undefined
        });
        return _0x5bdd70;
      }
    }), _0x5168b8);
    _0x5168b8.$$click = () => {
      _0x626e7e("home");
    };
    _0x120017(_0xa4f422 => {
      const _0x54fb6f = k.container;
      const _0x55db1e = k.view3d;
      const _0x2acfcf = _0x5467c9()?.image;
      const _0x20de45 = k.status;
      const _0x10eb8c = k.button;
      if (_0x54fb6f !== _0xa4f422._v$17) {
        _0x3cbd01(_0x4f8b62, _0xa4f422._v$17 = _0x54fb6f);
      }
      if (_0x55db1e !== _0xa4f422._v$18) {
        _0x3cbd01(_0xd61d09, _0xa4f422._v$18 = _0x55db1e);
      }
      if (_0x2acfcf !== _0xa4f422._v$19) {
        _0x58ac5a(_0x159c7a, "src", _0xa4f422._v$19 = _0x2acfcf);
      }
      if (_0x20de45 !== _0xa4f422._v$20) {
        _0x3cbd01(_0x1424a3, _0xa4f422._v$20 = _0x20de45);
      }
      if (_0x10eb8c !== _0xa4f422._v$21) {
        _0x3cbd01(_0x5168b8, _0xa4f422._v$21 = _0x10eb8c);
      }
      return _0xa4f422;
    }, {
      _v$17: undefined,
      _v$18: undefined,
      _v$19: undefined,
      _v$20: undefined,
      _v$21: undefined
    });
    return _0x4f8b62;
  })();
};
_0x1608c8(["click"]);
const xt = "_input_r9qyp_1";
const Ct = "_container_r9qyp_12";
const Pt = "_title_r9qyp_52";
const kt = "_description_r9qyp_61";
const At = "_inputContainer_r9qyp_71";
const Ot = "_button_r9qyp_90";
const J = {
  input: xt,
  container: Ct,
  title: Pt,
  description: kt,
  inputContainer: At,
  button: Ot
};
const Dt = _0x2a2e4c("<div><div><div></div><div></div><div class=\"flex w-full flex-row items-center justify-center gap-[1vh] px-[5vh]\"><div><p></div><div><p>Cancel");
const It = _0x2a2e4c("<input type=\"number\">");
const Bt = _0x2a2e4c("<input type=\"text\">");
const Lt = _0x2a2e4c("<div>");
function Et() {
  const {
    input: _0x591b1f,
    setInput: _0x3f4a9c
  } = T();
  return (() => {
    const _0x116695 = Dt();
    const _0x11ffd8 = _0x116695.firstChild;
    const _0x2e8bc9 = _0x11ffd8.firstChild;
    const _0x1f3980 = _0x2e8bc9.nextSibling;
    const _0x4a8e55 = _0x1f3980.nextSibling;
    const _0x2d4659 = _0x4a8e55.firstChild;
    const _0x2e6514 = _0x2d4659.firstChild;
    const _0x36112d = _0x2d4659.nextSibling;
    _0x1bd320(_0x2e8bc9, () => _0x591b1f()?.title);
    _0x1bd320(_0x1f3980, () => _0x591b1f()?.description);
    _0x1bd320(_0x11ffd8, _0x723af4(_0x1afe4e, {
      get each() {
        if (_0x57a51a(() => !!_0x591b1f())()) {
          return Object.entries(_0x591b1f().inputs);
        } else {
          return [];
        }
      },
      children: ([_0x14391a, _0x530d7a]) => (() => {
        const _0x21100b = Lt();
        _0x1bd320(_0x21100b, _0x723af4(_0x30779a, {
          get when() {
            return _0x530d7a.type === "number";
          },
          get children() {
            const _0x480dec = It();
            _0x480dec.$$input = _0x5a8b35 => {
              const _0xeee556 = _0x5a8b35.target;
              _0xeee556.value = _0xeee556.value.replace(/[^0-9]/g, "");
            };
            _0x58ac5a(_0x480dec, "id", _0x14391a);
            _0x120017(_0x406832 => {
              const _0x48b8f8 = _0x530d7a.placeholder;
              const _0x95a13 = _0x530d7a.min;
              if (_0x48b8f8 !== _0x406832._v$7) {
                _0x58ac5a(_0x480dec, "placeholder", _0x406832._v$7 = _0x48b8f8);
              }
              if (_0x95a13 !== _0x406832._v$8) {
                _0x58ac5a(_0x480dec, "min", _0x406832._v$8 = _0x95a13);
              }
              return _0x406832;
            }, {
              _v$7: undefined,
              _v$8: undefined
            });
            _0x120017(() => _0x480dec.value = _0x530d7a.defaultValue ?? _0x530d7a.value);
            return _0x480dec;
          }
        }), null);
        _0x1bd320(_0x21100b, _0x723af4(_0x30779a, {
          get when() {
            return _0x530d7a.type !== "number";
          },
          get children() {
            const _0x457e93 = Bt();
            _0x58ac5a(_0x457e93, "id", _0x14391a);
            _0x120017(() => _0x58ac5a(_0x457e93, "placeholder", _0x530d7a.placeholder));
            _0x120017(() => _0x457e93.value = _0x530d7a.defaultValue ?? _0x530d7a.value);
            return _0x457e93;
          }
        }), null);
        _0x120017(() => _0x3cbd01(_0x21100b, J.inputContainer));
        return _0x21100b;
      })()
    }), _0x4a8e55);
    _0x2d4659.$$click = async () => {
      const _0x435aa7 = {};
      document.querySelectorAll("input").forEach(_0x1c974b => {
        _0x435aa7[_0x1c974b.id] = {
          ..._0x1c974b,
          value: _0x1c974b.value
        };
      });
      _0x3f4a9c(_0x5158e4 => ({
        ..._0x5158e4,
        inputs: _0x435aa7
      }));
      await _0x591b1f()?.onConfirm?.();
      _0x3f4a9c(null);
    };
    _0x1bd320(_0x2e6514, () => _0x591b1f()?.title);
    _0x36112d.$$click = async () => {
      if (_0x591b1f()?.onCancel) {
        await _0x591b1f()?.onCancel?.();
      }
      _0x3f4a9c(null);
    };
    _0x120017(_0x4011ff => {
      const _0x60ab95 = J.input;
      const _0x209db9 = J.container;
      const _0x31a375 = J.title;
      const _0x194532 = J.description;
      const _0x5845b1 = J.button;
      const _0x3cbea3 = J.button;
      if (_0x60ab95 !== _0x4011ff._v$) {
        _0x3cbd01(_0x116695, _0x4011ff._v$ = _0x60ab95);
      }
      if (_0x209db9 !== _0x4011ff._v$2) {
        _0x3cbd01(_0x11ffd8, _0x4011ff._v$2 = _0x209db9);
      }
      if (_0x31a375 !== _0x4011ff._v$3) {
        _0x3cbd01(_0x2e8bc9, _0x4011ff._v$3 = _0x31a375);
      }
      if (_0x194532 !== _0x4011ff._v$4) {
        _0x3cbd01(_0x1f3980, _0x4011ff._v$4 = _0x194532);
      }
      if (_0x5845b1 !== _0x4011ff._v$5) {
        _0x3cbd01(_0x2d4659, _0x4011ff._v$5 = _0x5845b1);
      }
      if (_0x3cbea3 !== _0x4011ff._v$6) {
        _0x3cbd01(_0x36112d, _0x4011ff._v$6 = _0x3cbea3);
      }
      return _0x4011ff;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined
    });
    return _0x116695;
  })();
}
_0x1608c8(["click", "input"]);
const Tt = _0x2a2e4c("<div>");
const jt = () => {
  const {
    page: _0x318712,
    setProperties: _0x570bcd,
    setPage: _0x441807,
    setLocalProperty: _0x1bb76e,
    setIsRealtor: _0x57a7fc,
    input: _0x2790c4,
    setIsPD: _0x2d1372
  } = T();
  _0x3af141(async () => {
    _0x441807("home");
    const _0x36382f = await _0x548466.execute("housing:getProperties");
    _0x570bcd(_0x36382f);
    const _0x6511c2 = await _0x548466.execute("housing:getLocalProperty");
    _0x1bb76e(_0x6511c2);
    const _0x383334 = await _0x548466.execute("housing:isRealtorEmployment");
    _0x57a7fc(_0x383334);
    const _0x29637d = await _0x548466.execute("housing:isPD");
    _0x2d1372(_0x29637d);
  });
  return (() => {
    const _0x547534 = Tt();
    _0x1bd320(_0x547534, _0x723af4(Ie, {}), null);
    _0x1bd320(_0x547534, _0x723af4(_0x30779a, {
      get when() {
        return _0x318712() === "home";
      },
      get children() {
        return _0x723af4(Xe, {});
      }
    }), null);
    _0x1bd320(_0x547534, _0x723af4(_0x30779a, {
      get when() {
        return _0x318712() === "details";
      },
      get children() {
        return _0x723af4(St, {});
      }
    }), null);
    _0x1bd320(_0x547534, _0x723af4(_0x30779a, {
      get when() {
        return _0x2790c4();
      },
      get children() {
        return _0x723af4(Et, {});
      }
    }), null);
    _0x120017(() => _0x3cbd01(_0x547534, xe.container));
    return _0x547534;
  })();
};
const Rt = () => _0x723af4(_0x1d868a, {
  get name() {
    return Ft.name;
  },
  headerColor: "#030314",
  get children() {
    return _0x723af4(we, {
      get children() {
        return _0x723af4(jt, {});
      }
    });
  }
});
const zt = "" + new URL("realestate-icon-1c7e3c38.png", import.meta.url).href;
const Ft = {
  icon: zt,
  enabled: true,
  onDock: false,
  name: "real_estate",
  label: "Real Estate",
  render: () => _0x723af4(Rt, {})
};
export { Ft as default };
