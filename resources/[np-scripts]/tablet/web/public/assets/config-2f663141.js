import { ag as _0x42520a, a as _0x3b0d1e, c as _0x23b0ea, m as _0x410756, e as _0x46b241, j as _0x25db06, k as _0x51dd55, l as _0x282a34, t as _0x4d9cb9, ai as _0x19f0b7, f as _0x4c54b3, y as _0x553298, S as _0x3153e5, x as _0x4bb510, G as _0x476039, ak as _0x301056, aE as _0xd6f6, n as _0x3a14fb, J as _0x43e2de, Q as _0x5a760b, af as _0x9fc442, L as _0x411e91 } from "./vendor-c69496a3.js";
import { A as _0x151087 } from "./index-3eb10154.js";
import { n as _0x5da468 } from "./nui-2dfb4fd5.js";
import { b as _0x4fb705 } from "./vite-1e207deb.js";
import "./commonjsHelpers-725317a4.js";
import "./v-packages-3113361c.js";
const ae = "_container_m91sc_1";
const re = "_divider_m91sc_31";
const le = "_active_m91sc_39";
const N = {
  container: ae,
  divider: re,
  active: le
};
const [de, ue] = _0x42520a(() => {
  const [_0x57946b, _0x3291eb] = _0x3b0d1e("");
  const [_0x5ac4c8, _0x3dedf3] = _0x3b0d1e(null);
  const [_0x11d1cf, _0x475580] = _0x23b0ea({
    document: {
      id: -1,
      content: "",
      title: ""
    },
    documentTypes: [],
    fromShare: false,
    list: [],
    page: "home",
    notesTypeId: -1,
    selectedDocumentType: {},
    signatures: [],
    signaturesToRender: [],
    unlocked: false,
    selectedDocumentViewType: null,
    initialState: {
      document: {
        id: -1,
        content: "",
        title: ""
      }
    }
  });
  return {
    state: _0x11d1cf,
    setState: _0x475580,
    searchText: _0x57946b,
    setSearchText: _0x3291eb,
    input: _0x5ac4c8,
    setInput: _0x3dedf3
  };
});
const g = () => ue();
const ve = _0x4d9cb9("<div><div class=\"flex w-full flex-row items-center justify-start gap-[2vh]\"><i></i></div><div>");
const w = _0x434f26 => {
  const {
    state: _0xe028c1,
    setState: _0x3bf883
  } = g();
  return (() => {
    const _0xab4178 = ve();
    const _0x5441a = _0xab4178.firstChild;
    const _0x18244f = _0x5441a.firstChild;
    const _0x5e2e6e = _0x5441a.nextSibling;
    _0xab4178.$$click = () => {
      _0x3bf883("page", _0x434f26.page);
      _0x3bf883("selectedDocumentType", {});
    };
    _0x46b241(_0x5441a, () => _0x434f26.label, null);
    _0x25db06(_0x57795a => {
      const _0x205ab9 = N.container;
      const _0x3ca36c = {
        [N.active]: _0x434f26.page === _0xe028c1.page
      };
      const _0x354e92 = _0x434f26.icon;
      const _0x3cb65a = N.divider;
      if (_0x205ab9 !== _0x57795a._v$) {
        _0x51dd55(_0xab4178, _0x57795a._v$ = _0x205ab9);
      }
      _0x57795a._v$2 = _0x282a34(_0xab4178, _0x3ca36c, _0x57795a._v$2);
      if (_0x354e92 !== _0x57795a._v$3) {
        _0x51dd55(_0x18244f, _0x57795a._v$3 = _0x354e92);
      }
      if (_0x3cb65a !== _0x57795a._v$4) {
        _0x51dd55(_0x5e2e6e, _0x57795a._v$4 = _0x3cb65a);
      }
      return _0x57795a;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined
    });
    return _0xab4178;
  })();
};
_0x410756(["click"]);
const _e = "_container_7jv0n_1";
const me = "_divider_7jv0n_36";
const Q = {
  container: _e,
  divider: me
};
const fe = _0x4d9cb9("<div><div class=\"flex flex-row items-center justify-start gap-[0.5vh] px-[2vh] py-[1vh]\"><div class=\"flex flex-col items-start justify-start\"><h1>Documents</h1><h2>Manage your documents</div></div><div></div><div class=\"mt-[1vh] flex h-full flex-col items-center justify-start gap-[0.5vh] px-[2vh]\">");
const $e = _0x516458 => {
  g();
  return (() => {
    const _0x8a249a = fe();
    const _0x26dab3 = _0x8a249a.firstChild;
    const _0x1e7e59 = _0x26dab3.nextSibling;
    const _0x4bbff3 = _0x1e7e59.nextSibling;
    _0x46b241(_0x4bbff3, () => _0x516458.children);
    _0x25db06(_0x3dfb4c => {
      const _0x2872c6 = Q.container;
      const _0x3bbd84 = Q.divider;
      if (_0x2872c6 !== _0x3dfb4c._v$) {
        _0x51dd55(_0x8a249a, _0x3dfb4c._v$ = _0x2872c6);
      }
      if (_0x3bbd84 !== _0x3dfb4c._v$2) {
        _0x51dd55(_0x1e7e59, _0x3dfb4c._v$2 = _0x3bbd84);
      }
      return _0x3dfb4c;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    return _0x8a249a;
  })();
};
const pe = "_container_1nn0d_1";
const he = {
  container: pe
};
const ge = "_container_6zebn_1";
const ye = "_loading_6zebn_35";
const G = {
  container: ge,
  loading: ye
};
const be = _0x4d9cb9("<div><h1>Welcome to Documents Application</h1><p>This application is used to manage your documents, licenses, contracts, and other important documents.</p><div>Application is loading...");
const De = () => (() => {
  const _0x1b3246 = be();
  const _0x2d23c3 = _0x1b3246.firstChild;
  const _0x45dab = _0x2d23c3.nextSibling;
  const _0x359db5 = _0x45dab.nextSibling;
  _0x25db06(_0x4d9a96 => {
    const _0x592518 = G.container;
    const _0x22d78d = G.loading;
    if (_0x592518 !== _0x4d9a96._v$) {
      _0x51dd55(_0x1b3246, _0x4d9a96._v$ = _0x592518);
    }
    if (_0x22d78d !== _0x4d9a96._v$2) {
      _0x51dd55(_0x359db5, _0x4d9a96._v$2 = _0x22d78d);
    }
    return _0x4d9a96;
  }, {
    _v$: undefined,
    _v$2: undefined
  });
  return _0x1b3246;
})();
const L = async (_0x339e3c, _0x100de1) => _0x19f0b7(_0x339e3c, async () => {
  const {
    state: _0x2d4fe1,
    setState: _0x1f7a77
  } = g();
  if (!_0x2d4fe1) {
    return;
  }
  const _0x348e1d = _0x100de1 === -1 ? _0x2d4fe1.documentTypes.find(_0x56c12c => _0x56c12c.name === "Notes").id : _0x2d4fe1.notesTypeId;
  const _0x2c4bb0 = _0x100de1 !== -1 ? _0x100de1 : _0x348e1d;
  const _0x45e7d9 = _0x2d4fe1.documentTypes.find(_0x2b055b => _0x2b055b.id === _0x2c4bb0);
  _0x1f7a77("notesTypeId", _0x348e1d);
  _0x1f7a77("selectedDocumentType", _0x45e7d9);
  const _0xa01fc0 = {
    fromShare: false,
    list: (await ([2, 4].includes(_0x2c4bb0) ? _0x5da468("np-ui:getDocuments", {
      type_id: _0x2c4bb0
    }) : _0x5da468("phone/getDocuments", {
      type_id: _0x2c4bb0
    }, {
      extApi: true
    }))).data
  };
  _0x1f7a77(_0xa01fc0);
});
const xe = async _0x260e3c => _0x19f0b7(_0x260e3c, async () => {
  const {
    state: _0x48a16b,
    setState: _0xa56832
  } = g();
  const _0x1a5943 = _0x48a16b.document.id === -1;
  const _0x1e7edf = "np-ui:" + (_0x1a5943 ? "create" : "edit") + "Document";
  console.log("state.selectedDocumentType?.id ?? state.selectedDocumentViewType", _0x48a16b.selectedDocumentType?.id ?? _0x48a16b.selectedDocumentViewType);
  const _0x1a59a2 = await _0x5da468(_0x1e7edf, {
    type_id: _0x48a16b.selectedDocumentType?.id ?? _0x48a16b.selectedDocumentViewType,
    document: _0x48a16b.document
  });
  if (!_0x1a59a2.meta.ok) {
    _0x4fb705("documents", _0x1a59a2.meta.message);
    return;
  }
  if (_0x1a5943) {
    L(_0x260e3c, _0x48a16b.selectedDocumentType?.id ?? _0x48a16b.selectedDocumentViewType);
  } else {
    B(_0x260e3c, false);
  }
});
const Ce = async (_0x99910d, _0x3ef79d, _0x2df166 = false) => _0x19f0b7(_0x99910d, async () => {
  const {
    state: _0x3680d8,
    setState: _0x3b6ec8
  } = g();
  const _0x5914f1 = await ([2, 4].includes(_0x3ef79d.type_id) ? _0x5da468("np-ui:getDocumentContent", {
    document: _0x3ef79d
  }) : _0x5da468("phone/getDocumentContent", {
    document: _0x3ef79d
  }, {
    extApi: true
  }));
  if (!_0x5914f1.meta.ok) {
    _0x4fb705("documents", _0x5914f1.meta.message);
    return;
  }
  await B(_0x99910d, false);
  const _0x596669 = {
    fromShare: _0x2df166,
    document: _0x5914f1.data,
    page: "editing"
  };
  if (_0x2df166) {
    const _0x2c32c0 = _0x3680d8.documentTypes.find(_0x25e347 => _0x25e347.id === _0x3ef79d.type_id) || _0x3680d8.documentTypes[0];
    _0x596669.selectedDocumentType = _0x2c32c0;
  }
  _0x3b6ec8(_0x596669);
});
const B = async (_0x1e0bd7, _0x47922d = true) => _0x19f0b7(_0x1e0bd7, async () => {
  const {
    state: _0x56e4e4,
    setState: _0x45f229
  } = g();
  if (!_0x47922d && !_0x56e4e4.unlocked) {
    return;
  }
  const _0x48af34 = _0x56e4e4.document;
  if ((await _0x5da468("np-ui:startEditDocument", {
    document: _0x48af34,
    unlock: _0x47922d
  }, {
    returnData: _0x48af34
  })).meta.ok) {
    _0x45f229({
      unlocked: _0x47922d
    });
  }
});
const Te = _0x3e90f6 => _0x19f0b7(_0x3e90f6, async () => {
  const {
    state: _0x6191f1
  } = g();
  const _0x4b5ca5 = _0x6191f1.document;
  _0x5da468("np-ui:dropDocument", {
    document: _0x4b5ca5
  });
});
const Se = _0x16d303 => _0x19f0b7(_0x16d303, async () => {
  const {
    state: _0x1ac353
  } = g();
  const _0xd64f89 = _0x1ac353.document;
  _0x5da468("np-ui:shareDocumentLocal", {
    document: _0xd64f89
  });
});
const we = "_container_187o2_1";
const ke = "_box_187o2_13";
const je = "_button_187o2_36";
const V = {
  container: we,
  box: ke,
  button: je,
  delete: "_delete_187o2_65"
};
const Ae = _0x4d9cb9("<div><div class=\"flex flex-row items-center justify-start gap-[3vh]\"><div><i class=\"fas fa-file-alt\"></i></div><p></div><div class=\"flex flex-row items-center justify-end gap-[1vh]\"><div>View");
const Ee = _0x4d9cb9("<div><i>");
const Ve = _0x30378b => (() => {
  const _0x37b73d = Ae();
  const _0x573862 = _0x37b73d.firstChild;
  const _0x4293ad = _0x573862.firstChild;
  const _0xe3480a = _0x4293ad.nextSibling;
  const _0x5544df = _0x573862.nextSibling;
  const _0xdd58a5 = _0x5544df.firstChild;
  _0x46b241(_0xe3480a, () => _0x30378b.title);
  _0x46b241(_0x5544df, _0x4c54b3(_0x553298, {
    get each() {
      return _0x30378b.buttons;
    },
    children: _0x25b1a8 => (() => {
      const _0xd507a8 = Ee();
      const _0x570949 = _0xd507a8.firstChild;
      _0xd507a8.$$click = () => {
        _0x25b1a8.onClick();
      };
      _0x46b241(_0xd507a8, () => _0x25b1a8.label, null);
      _0x25db06(_0x51ba5e => {
        const _0x1c5245 = V.button;
        const _0xb63be7 = _0x25b1a8.icon;
        if (_0x1c5245 !== _0x51ba5e._v$4) {
          _0x51dd55(_0xd507a8, _0x51ba5e._v$4 = _0x1c5245);
        }
        if (_0xb63be7 !== _0x51ba5e._v$5) {
          _0x51dd55(_0x570949, _0x51ba5e._v$5 = _0xb63be7);
        }
        return _0x51ba5e;
      }, {
        _v$4: undefined,
        _v$5: undefined
      });
      return _0xd507a8;
    })()
  }), _0xdd58a5);
  _0xdd58a5.$$click = () => {
    _0x30378b.onView();
  };
  _0x25db06(_0x1c2055 => {
    const _0x35d285 = V.container;
    const _0x408f5f = V.box;
    const _0x1a8669 = V.button;
    if (_0x35d285 !== _0x1c2055._v$) {
      _0x51dd55(_0x37b73d, _0x1c2055._v$ = _0x35d285);
    }
    if (_0x408f5f !== _0x1c2055._v$2) {
      _0x51dd55(_0x4293ad, _0x1c2055._v$2 = _0x408f5f);
    }
    if (_0x1a8669 !== _0x1c2055._v$3) {
      _0x51dd55(_0xdd58a5, _0x1c2055._v$3 = _0x1a8669);
    }
    return _0x1c2055;
  }, {
    _v$: undefined,
    _v$2: undefined,
    _v$3: undefined
  });
  return _0x37b73d;
})();
_0x410756(["click"]);
const Le = "_container_1e9z5_1";
const Ie = {
  container: Le
};
const Ne = _0x4d9cb9("<div>");
const U = _0x98c2e8 => (() => {
  const _0x16ca6a = Ne();
  _0x46b241(_0x16ca6a, () => _0x98c2e8.children);
  _0x25db06(() => _0x51dd55(_0x16ca6a, Ie.container));
  return _0x16ca6a;
})();
const Re = "_container_4r8ne_1";
const Pe = {
  container: Re
};
const ze = "_container_18q04_1";
const Be = {
  container: ze
};
const Oe = _0x4d9cb9("<div><i class=\"fa-regular fa-search\"></i><input type=\"text\" placeholder=\"Search...\">");
const Me = () => {
  const {
    searchText: _0x4f2821,
    setSearchText: _0x203f08
  } = g();
  return (() => {
    const _0x2d460b = Oe();
    const _0x326b02 = _0x2d460b.firstChild;
    const _0x443490 = _0x326b02.nextSibling;
    _0x443490.$$input = _0x3d5700 => {
      _0x203f08(_0x3d5700.currentTarget.value);
    };
    _0x25db06(() => _0x51dd55(_0x2d460b, Be.container));
    _0x25db06(() => _0x443490.value = _0x4f2821());
    return _0x2d460b;
  })();
};
_0x410756(["input"]);
const Fe = _0x4d9cb9("<div><p></p><div class=\"flex flex-row items-center justify-end gap-[1vh]\">");
const X = _0x139013 => (() => {
  const _0x1fac7f = Fe();
  const _0x1d3117 = _0x1fac7f.firstChild;
  const _0x50aa38 = _0x1d3117.nextSibling;
  _0x46b241(_0x1d3117, () => _0x139013.title);
  _0x46b241(_0x50aa38, _0x4c54b3(_0x3153e5, {
    get when() {
      return !_0x139013.noSearch;
    },
    get children() {
      return _0x4c54b3(Me, {});
    }
  }), null);
  _0x46b241(_0x50aa38, () => _0x139013.children, null);
  _0x25db06(() => _0x51dd55(_0x1fac7f, Pe.container));
  return _0x1fac7f;
})();
const He = "_container_1xkbt_1";
const qe = "_invite_1xkbt_10";
const Qe = {
  container: He,
  invite: qe
};
const Ge = _0x4d9cb9("<div><div class=\"mb-[2vh] flex h-full w-full flex-col items-start justify-start gap-[0.5vh] overflow-auto pr-[1vh]\">");
const k = _0x287d91 => {
  const {
    state: _0x58385e,
    searchText: _0x367e4a
  } = g();
  const _0x20d323 = _0x301056();
  const _0x89fa5c = _0x4bb510(() => Object.values(_0x58385e.list).filter(_0x35eec9 => _0x35eec9.title.toLowerCase().includes(_0x367e4a().toLowerCase())));
  return (() => {
    const _0x46ce72 = Ge();
    const _0xa06d61 = _0x46ce72.firstChild;
    _0x46b241(_0x46ce72, _0x4c54b3(U, {
      get children() {
        return _0x287d91.title;
      }
    }), _0xa06d61);
    _0x46b241(_0x46ce72, _0x4c54b3(X, {
      title: "Notes"
    }), _0xa06d61);
    _0x46b241(_0xa06d61, _0x4c54b3(_0x553298, {
      get each() {
        return _0x89fa5c();
      },
      children: _0x40d5f1 => _0x4c54b3(Ve, _0x476039(_0x40d5f1, {
        onView: () => {
          Ce(_0x20d323, _0x40d5f1);
        }
      }))
    }));
    _0x25db06(() => _0x51dd55(_0x46ce72, Qe.container));
    return _0x46ce72;
  })();
};
const We = "_container_1xkbt_1";
const Je = "_invite_1xkbt_10";
const W = {
  container: We,
  invite: Je
};
const Ke = _0x4d9cb9("<div><div class=\"mb-[2vh] flex h-full w-full flex-col items-start justify-start gap-[0.5vh] overflow-auto pr-[1vh]\">");
const Ue = _0x4d9cb9("<div><i>");
const Xe = _0x25f2ed => {
  const {
    state: _0xfe055c,
    setState: _0x3a6565,
    setInput: _0x5c0580
  } = g();
  const _0x51db51 = _0x301056();
  const _0x4d92f2 = _0xfe055c.document.editable && _0xfe055c.selectedDocumentType.editable && !_0xfe055c.fromShare;
  const _0x5f4682 = _0xfe055c.selectedDocumentType.shareable && !_0xfe055c.fromShare;
  const _0x53acd3 = !_0xfe055c.document || _0xfe055c.document.id === -1;
  const _0x33a53b = !_0x53acd3 && (!_0x4d92f2 || _0x5f4682 && !_0xfe055c.unlocked && !_0xfe055c.fromShare);
  const _0x134a0f = _0xfe055c.selectedDocumentType.name === "Notes";
  const _0x26a996 = _0xfe055c.selectedDocumentType.can_sign;
  const _0x265d8d = [];
  if (!_0x33a53b && !_0xfe055c.fromShare) {
    _0x265d8d.push({
      icon: "cloud-upload-alt",
      onClick: () => xe(_0x51db51),
      label: "Save",
      color: "green"
    });
  }
  if (_0x33a53b && _0x4d92f2) {
    _0x265d8d.push({
      icon: "pencil-alt",
      onClick: () => B(_0x51db51),
      label: "Edit Document",
      color: "orange"
    });
  }
  if (!_0x53acd3 && !_0xfe055c.fromShare) {
    if (_0x134a0f) {
      _0x265d8d.push({
        icon: "qrcode",
        onClick: () => Te(_0x51db51),
        label: "Drop QR Code"
      });
    }
    _0x265d8d.push({
      icon: "share-alt",
      onClick: () => Se(_0x51db51),
      label: "Share (Local)"
    });
    if (_0x4d92f2 && !_0x134a0f && !_0xfe055c.unlocked) {
      _0x265d8d.push({
        icon: "stamp",
        onClick: () => _0x5c0580(() => ({
          title: "Finalize",
          description: "Are you sure? This cannot be undone",
          inputs: {},
          onConfirm: async () => {
            const _0x300c28 = await _0x5da468("np-ui:finalizeDocument", {
              document: _0xfe055c.document
            });
            if (!_0x300c28.meta.ok) {
              _0x4fb705("documents", _0x300c28.meta.message);
              return;
            }
            _0x3a6565({
              document: {
                ..._0xfe055c.document,
                editable: false
              }
            });
            L(_0x51db51, _0xfe055c.selectedDocumentType.id);
          }
        })),
        label: "Finalize"
      });
    }
    _0x265d8d.push({
      icon: "trash",
      onClick: () => _0x5c0580(() => ({
        title: "Delete",
        description: "Are you sure? This cannot be undone",
        inputs: {},
        onConfirm: async () => {
          await _0x5da468("np-ui:deleteDocument", {
            document: _0xfe055c.document
          });
          L(_0x51db51, _0xfe055c.selectedDocumentType.id);
        }
      })),
      label: "Delete"
    });
  }
  if (!_0x53acd3 && _0xfe055c.fromShare && !_0x4d92f2 && _0x26a996) {
    _0x265d8d.push({
      icon: "pen-nib",
      onClick: () => _0x3a6565({
        page: "signatures"
      }),
      label: "Signatures"
    });
  }
  const _0x4931ca = _0x5d7106 => {
    const _0x4201cf = {
      ..._0xfe055c.document,
      ..._0x5d7106
    };
    _0x3a6565({
      document: _0x4201cf
    });
  };
  let _0xb105bc;
  const _0x35d1d3 = _0xd70eb2 => {
    _0xb105bc = _0xd70eb2;
    _0xb105bc.on("text-change", () => {
      _0x4931ca({
        content: _0xb105bc.root.innerHTML
      });
    });
    _0xd70eb2.setText(_0xfe055c.document.content);
  };
  return (() => {
    const _0x2c0287 = Ke();
    const _0x253651 = _0x2c0287.firstChild;
    _0x46b241(_0x2c0287, _0x4c54b3(U, {
      get children() {
        return _0x25f2ed.title;
      }
    }), _0x253651);
    _0x46b241(_0x2c0287, _0x4c54b3(X, {
      get title() {
        return _0xfe055c.document.title;
      },
      noSearch: true,
      get children() {
        return _0x4c54b3(_0x553298, {
          each: _0x265d8d,
          children: _0x586f8d => (() => {
            const _0x28500e = Ue();
            const _0xfa6f1f = _0x28500e.firstChild;
            _0x28500e.$$click = () => {
              _0x586f8d.onClick();
            };
            _0x46b241(_0x28500e, () => _0x586f8d.label, null);
            _0x25db06(_0x282379 => {
              const _0x113c68 = W.invite;
              const _0x1ce20b = _0x586f8d.icon;
              if (_0x113c68 !== _0x282379._v$) {
                _0x51dd55(_0x28500e, _0x282379._v$ = _0x113c68);
              }
              if (_0x1ce20b !== _0x282379._v$2) {
                _0x51dd55(_0xfa6f1f, _0x282379._v$2 = _0x1ce20b);
              }
              return _0x282379;
            }, {
              _v$: undefined,
              _v$2: undefined
            });
            return _0x28500e;
          })()
        });
      }
    }), _0x253651);
    _0x46b241(_0x253651, _0x4c54b3(_0xd6f6, {
      ref(_0x1d7290) {
        const _0x18c4dd = _0xb105bc;
        if (typeof _0x18c4dd == "function") {
          _0x18c4dd(_0x1d7290);
        } else {
          _0xb105bc = _0x1d7290;
        }
      },
      as: "main",
      onReady: _0x35d1d3,
      placeholder: "Document content goes here...",
      readOnly: _0x33a53b
    }));
    _0x25db06(() => _0x51dd55(_0x2c0287, W.container));
    return _0x2c0287;
  })();
};
_0x410756(["click"]);
const Ye = "_input_1nmy5_1";
const Ze = "_container_1nmy5_12";
const et = "_title_1nmy5_41";
const tt = "_description_1nmy5_50";
const nt = "_inputContainer_1nmy5_61";
const it = "_button_1nmy5_87";
const ct = "_cancel_1nmy5_117";
const S = {
  input: Ye,
  container: Ze,
  title: et,
  description: tt,
  inputContainer: nt,
  button: it,
  cancel: ct
};
const ot = _0x4d9cb9("<div><div><div></div><div></div><div class=\"flex w-full flex-row items-center justify-center gap-[0.5vh]\"><div><p></div><div><p>Cancel");
const st = _0x4d9cb9("<div><input type=\"text\">");
function at() {
  const {
    input: _0x229bb6,
    setInput: _0x5f119e
  } = g();
  return (() => {
    const _0x2e25ca = ot();
    const _0xaeeaf4 = _0x2e25ca.firstChild;
    const _0x7b2f50 = _0xaeeaf4.firstChild;
    const _0x55ac15 = _0x7b2f50.nextSibling;
    const _0x58445c = _0x55ac15.nextSibling;
    const _0x203710 = _0x58445c.firstChild;
    const _0x5bb64a = _0x203710.firstChild;
    const _0xce921 = _0x203710.nextSibling;
    _0x46b241(_0x7b2f50, () => _0x229bb6()?.title);
    _0x46b241(_0x55ac15, () => _0x229bb6()?.description);
    _0x46b241(_0xaeeaf4, _0x4c54b3(_0x553298, {
      get each() {
        if (_0x4bb510(() => !!_0x229bb6())()) {
          return Object.entries(_0x229bb6().inputs);
        } else {
          return [];
        }
      },
      children: ([_0x1c79bb, _0x4cc57d]) => (() => {
        const _0x46f46f = st();
        const _0x335496 = _0x46f46f.firstChild;
        _0x3a14fb(_0x335496, "id", _0x1c79bb);
        _0x25db06(_0x4c0b01 => {
          const _0x29ac = S.inputContainer;
          const _0x10f610 = _0x4cc57d.placeholder;
          if (_0x29ac !== _0x4c0b01._v$8) {
            _0x51dd55(_0x46f46f, _0x4c0b01._v$8 = _0x29ac);
          }
          if (_0x10f610 !== _0x4c0b01._v$9) {
            _0x3a14fb(_0x335496, "placeholder", _0x4c0b01._v$9 = _0x10f610);
          }
          return _0x4c0b01;
        }, {
          _v$8: undefined,
          _v$9: undefined
        });
        return _0x46f46f;
      })()
    }), _0x58445c);
    _0x203710.$$click = async () => {
      const _0x58d95d = {};
      document.querySelectorAll("input").forEach(_0x531f85 => {
        _0x58d95d[_0x531f85.id] = {
          ..._0x531f85,
          value: _0x531f85.value
        };
      });
      _0x5f119e(_0x12d360 => ({
        ..._0x12d360,
        inputs: _0x58d95d
      }));
      await _0x229bb6()?.onConfirm?.();
      _0x5f119e(null);
    };
    _0x46b241(_0x5bb64a, () => _0x229bb6()?.title);
    _0xce921.$$click = async () => {
      if (_0x229bb6()?.onCancel) {
        await _0x229bb6()?.onCancel?.();
      }
      _0x5f119e(null);
    };
    _0x25db06(_0x453360 => {
      const _0x364efc = S.input;
      const _0x62eff3 = S.container;
      const _0x37261e = S.title;
      const _0x2b15ec = S.description;
      const _0x24738b = S.button;
      const _0x5bd689 = S.button;
      const _0x1de87b = {
        [S.cancel]: true
      };
      if (_0x364efc !== _0x453360._v$) {
        _0x51dd55(_0x2e25ca, _0x453360._v$ = _0x364efc);
      }
      if (_0x62eff3 !== _0x453360._v$2) {
        _0x51dd55(_0xaeeaf4, _0x453360._v$2 = _0x62eff3);
      }
      if (_0x37261e !== _0x453360._v$3) {
        _0x51dd55(_0x7b2f50, _0x453360._v$3 = _0x37261e);
      }
      if (_0x2b15ec !== _0x453360._v$4) {
        _0x51dd55(_0x55ac15, _0x453360._v$4 = _0x2b15ec);
      }
      if (_0x24738b !== _0x453360._v$5) {
        _0x51dd55(_0x203710, _0x453360._v$5 = _0x24738b);
      }
      if (_0x5bd689 !== _0x453360._v$6) {
        _0x51dd55(_0xce921, _0x453360._v$6 = _0x5bd689);
      }
      _0x453360._v$7 = _0x282a34(_0xce921, _0x1de87b, _0x453360._v$7);
      return _0x453360;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined
    });
    return _0x2e25ca;
  })();
}
_0x410756(["click"]);
const rt = _0x4d9cb9("<div>");
const lt = () => {
  const {
    state: _0x47931b,
    setState: _0x1c1925,
    input: _0x305405
  } = g();
  const _0x39dd3a = [{
    id: 1,
    page: "notes",
    render: () => _0x4c54b3(k, {
      title: "Notes"
    })
  }, {
    id: 2,
    page: "licenses",
    render: () => _0x4c54b3(k, {
      title: "Licenses"
    })
  }, {
    id: 3,
    page: "documents",
    render: () => _0x4c54b3(k, {
      title: "Documents"
    })
  }, {
    id: 4,
    page: "vehicleRegistration",
    render: () => _0x4c54b3(k, {
      title: "Vehicle Registration"
    })
  }, {
    id: 5,
    page: "housingDocuments",
    render: () => _0x4c54b3(k, {
      title: "Housing Documents"
    })
  }, {
    id: 6,
    page: "contracts",
    render: () => _0x4c54b3(k, {
      title: "Contracts"
    })
  }, {
    page: "editing",
    render: () => _0x4c54b3(Xe, {
      title: "Editing"
    })
  }];
  const _0x366006 = _0x301056();
  _0x43e2de(async () => {
    const _0x56013e = (await _0x5da468("np-ui:getDocumentTypes", {})).data;
    _0x1c1925("documentTypes", _0x56013e);
    _0x1c1925("page", "notes");
    const _0x32722b = _0x39dd3a.find(_0x10c77f => _0x10c77f.page === "notes");
    _0x1c1925("selectedDocumentViewType", _0x32722b?.id);
  });
  _0x5a760b(async () => {
    if (_0x47931b.page === "editing") {
      return;
    }
    const _0x995951 = _0x39dd3a.find(_0x1a1e23 => _0x1a1e23.page === _0x47931b.page);
    _0x1c1925("selectedDocumentViewType", _0x995951?.id);
    await L(_0x366006, _0x47931b.selectedDocumentViewType);
  }, [_0x47931b.page]);
  const _0x56edf2 = _0x4bb510(() => _0x39dd3a.find(_0x2f60a1 => _0x2f60a1.page === _0x47931b.page));
  return _0x4c54b3(_0x411e91, {
    get fallback() {
      return _0x4c54b3(De, {});
    },
    get children() {
      const _0x17859b = rt();
      _0x46b241(_0x17859b, _0x4c54b3($e, {
        get children() {
          return [_0x4c54b3(w, {
            label: "Notes",
            page: "notes",
            icon: "fa-light fa-sticky-note"
          }), _0x4c54b3(w, {
            label: "Licenses",
            page: "licenses",
            icon: "fa-light fa-id-card"
          }), _0x4c54b3(w, {
            label: "Documents",
            page: "documents",
            icon: "fa-light fa-file-alt"
          }), _0x4c54b3(w, {
            label: "Vehicle Registration",
            page: "vehicleRegistration",
            icon: "fa-light fa-car"
          }), _0x4c54b3(w, {
            label: "Housing Documents",
            page: "housingDocuments",
            icon: "fa-light fa-home"
          }), _0x4c54b3(w, {
            label: "Contracts",
            page: "contracts",
            icon: "fa-light fa-file-signature"
          })];
        }
      }), null);
      _0x46b241(_0x17859b, _0x4c54b3(_0x9fc442, {
        name: "page-swap",
        mode: "outin",
        get children() {
          return _0x56edf2()?.render();
        }
      }), null);
      _0x46b241(_0x17859b, _0x4c54b3(_0x9fc442, {
        name: "scaleIn",
        get children() {
          return _0x4c54b3(_0x3153e5, {
            get when() {
              return _0x305405();
            },
            get children() {
              return _0x4c54b3(at, {});
            }
          });
        }
      }), null);
      _0x25db06(() => _0x51dd55(_0x17859b, he.container));
      return _0x17859b;
    }
  });
};
const dt = () => _0x4c54b3(_0x151087, {
  get name() {
    return ut.name;
  },
  headerColor: "#0B0B15",
  get children() {
    return _0x4c54b3(de, {
      get children() {
        return _0x4c54b3(lt, {});
      }
    });
  }
});
const ut = {
  icon: "https://assets.nopixel.net/dev/images/phone/icons/documents.svg",
  enabled: true,
  onDock: false,
  name: "documents",
  label: "Documents",
  isEnabled: true,
  render: () => _0x4c54b3(dt, {})
};
export { ut as default };
