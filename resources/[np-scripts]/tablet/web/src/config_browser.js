import { ag as _0x53b8b8, a as _0x8488b5, N as _0x39c9e7, x as _0x4482d9, m as _0x68661b, e as _0x1a6512, j as _0x3dcaad, k as _0x111484, l as _0x3aa50d, t as _0x5f5d63, f as _0xf418b, S as _0x47d980, y as _0x2d60a2, O as _0x50553, G as _0x5243ca, P as _0x1ad1cf, M as _0x16436b, n as _0x240b8b, w as _0x253663, p as _0x28abb2, J as _0x4faf69, o as _0x4316b4, c as _0x315e66, ax as _0x2e89cd, b as _0x50516f, Q as _0xda1edb, L as _0x5c177f, af as _0x3204c2 } from "./vendor.js";
import { A as _0x14566c } from "./index_shared.js";
import { N as _0x43970e } from "./v-packages.js";
import { b as _0x309ae3, d as _0x6b1c19 } from "./vite.js";
import { a as _0x2f1466 } from "./toast.js";
import "./commonjsHelpers.js";
const Ue = [{
  label: "Hire",
  id: "hire"
}, {
  label: "Change Roles",
  id: "change_role"
}, {
  label: "Pay Employees",
  id: "pay_employee"
}, {
  label: "Email Employees",
  id: "email_employees"
}, {
  label: "Pay External",
  id: "pay_external"
}, {
  label: "Charge External",
  id: "charge_external"
}, {
  label: "Fire",
  id: "fire"
}, {
  label: "Property Keys",
  id: "property_keys"
}, {
  label: "Storage Access",
  id: "stash_access"
}, {
  label: "Craft Access",
  id: "craft_access"
}, {
  label: "Bank Access",
  id: "bank_access"
}];
const [tt, nt] = _0x53b8b8(() => {
  const [_0x236f48, _0x19c90e] = _0x8488b5("home");
  const [_0x176be6, _0x52c713] = _0x8488b5("");
  const [_0x24ccd9, _0x4d47f5] = _0x8488b5(null);
  const [_0x56a6a4] = _0x39c9e7(() => _0x43970e.execute("business:getConfig"));
  const [_0x1cd57f, _0x79c5d3] = _0x8488b5(null);
  const [_0xda10e0, _0x24a9cf] = _0x8488b5(null);
  const [_0x3b81f1, _0x8c638a] = _0x39c9e7(() => _0x43970e.execute("business:getOwnBusinesses"));
  const [_0x40b900, _0x1e0703] = _0x39c9e7(() => _0x43970e.execute("business:getHiredBusinesses"));
  const [_0x35b691, _0x2fac3d] = _0x8488b5(0);
  const _0x409b44 = _0x50a8b8 => {
    _0x79c5d3(_0x50a8b8);
    _0x2fac3d(0);
    if (_0x50a8b8) {
      _0x16995a(_0x50a8b8).then(_0x2bbede => {
        _0x2fac3d(_0x2bbede);
      });
    }
  };
  const _0x16995a = async _0x17e0d7 => await _0x43970e.execute("business:getBusinessBalance", _0x17e0d7);
  const _0x203f6a = _0x4482d9(() => _0x1cd57f() === "admin" ? {
    id: "admin",
    name: "Admin",
    employee: {
      role: {
        name: "Admin",
        permissions: Ue.map(_0x5a4857 => _0x5a4857.id)
      }
    }
  } : _0x1cd57f() === null ? null : _0x40b900()?.find(_0x51e886 => _0x51e886.id === _0x1cd57f()));
  const [_0x1611e5, _0x1fee43] = _0x39c9e7(() => _0x1cd57f() === "admin" ? _0x43970e.execute("business:getBusinesses") : []);
  const [_0xd136df, _0x22566e] = _0x39c9e7(() => _0x1cd57f() === "admin" ? _0x43970e.execute("business:getRequests") : []);
  const [_0x5bb9ea, _0x26752b] = _0x39c9e7(() => _0x1cd57f() !== null || _0xda10e0() !== null ? _0x43970e.execute("business:getEmployees", _0xda10e0() || _0x1cd57f()) : []);
  const [_0x599966, _0x284b81] = _0x39c9e7(() => _0x1cd57f() !== null || _0xda10e0() !== null ? _0x43970e.execute("business:getRoles", _0xda10e0() || _0x1cd57f()) : []);
  const [_0x4c2ac3] = _0x39c9e7(() => _0x43970e.execute("business:isDOJ"));
  const [_0x4fc696] = _0x39c9e7(() => _0x43970e.execute("business:isMayor"));
  const _0x20b414 = _0x3aabe3 => _0x203f6a() ? (_0x203f6a()?.employee.role.permissions ?? []).includes(_0x3aabe3) : false;
  return {
    page: _0x236f48,
    setPage: _0x19c90e,
    ownBusinesses: _0x3b81f1,
    refetchOwnBusinesses: _0x8c638a.refetch,
    hiredBusinesses: _0x40b900,
    refetchHiredBusinesses: _0x1e0703.refetch,
    businessBalance: _0x35b691,
    setBusinessBalance: _0x2fac3d,
    config: _0x56a6a4,
    currentBusinessId: _0x1cd57f,
    setCurrentBusiness: _0x409b44,
    currentAdminBusinessId: _0xda10e0,
    setCurrentAdminBusinessId: _0x24a9cf,
    searchText: _0x176be6,
    setSearchText: _0x52c713,
    input: _0x24ccd9,
    setInput: _0x4d47f5,
    currentBusinessData: _0x203f6a,
    businesses: _0x1611e5,
    refetchBusinesses: _0x1fee43.refetch,
    businessRequests: _0xd136df,
    refetchBusinessRequests: _0x22566e.refetch,
    businessEmployees: _0x5bb9ea,
    refetchBusinessEmployees: _0x26752b.refetch,
    businessRoles: _0x599966,
    refetchBusinessRoles: _0x284b81.refetch,
    isDOJ: _0x4c2ac3,
    isMayor: _0x4fc696,
    hasPermission: _0x20b414
  };
});
const R = () => nt();
const st = "_container_m91sc_1";
const it = "_divider_m91sc_31";
const rt = "_active_m91sc_39";
const ge = {
  container: st,
  divider: it,
  active: rt
};
const lt = _0x5f5d63("<div><div class=\"flex w-full flex-row items-center justify-start gap-[2vh]\"><i></i></div><div>");
const ne = _0x1eb107 => {
  const {
    page: _0x574fe1,
    setPage: _0xb2dc2c
  } = R();
  return (() => {
    const _0x45811e = lt();
    const _0x2a7d2d = _0x45811e.firstChild;
    const _0x3098ac = _0x2a7d2d.firstChild;
    const _0xe0cd50 = _0x2a7d2d.nextSibling;
    _0x45811e.$$click = () => {
      _0xb2dc2c(_0x1eb107.page);
    };
    _0x1a6512(_0x2a7d2d, () => _0x1eb107.label, null);
    _0x3dcaad(_0x259ea8 => {
      const _0x7a725f = ge.container;
      const _0xa4a13e = {
        [ge.active]: _0x1eb107.page === _0x574fe1()
      };
      const _0x316b0f = _0x1eb107.icon;
      const _0x3c13a5 = ge.divider;
      if (_0x7a725f !== _0x259ea8._v$) {
        _0x111484(_0x45811e, _0x259ea8._v$ = _0x7a725f);
      }
      _0x259ea8._v$2 = _0x3aa50d(_0x45811e, _0xa4a13e, _0x259ea8._v$2);
      if (_0x316b0f !== _0x259ea8._v$3) {
        _0x111484(_0x3098ac, _0x259ea8._v$3 = _0x316b0f);
      }
      if (_0x3c13a5 !== _0x259ea8._v$4) {
        _0x111484(_0xe0cd50, _0x259ea8._v$4 = _0x3c13a5);
      }
      return _0x259ea8;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined
    });
    return _0x45811e;
  })();
};
_0x68661b(["click"]);
const ct = "_container_7jv0n_1";
const ot = "_divider_7jv0n_36";
const Be = {
  container: ct,
  divider: ot
};
const at = _0x5f5d63("<div><div class=\"flex flex-row items-center justify-start gap-[0.5vh] px-[2vh] py-[1vh]\"><i class=\"fa-solid fa-square-chevron-left\"></i><div class=\"flex flex-col items-start justify-start\"><h1>Business Management</h1><h2></div></div><div></div><div class=\"mt-[1vh] flex h-full flex-col items-center justify-start gap-[0.5vh] px-[2vh]\">");
const Je = _0x5e69be => {
  const {
    currentBusinessId: _0x346aaa,
    currentBusinessData: _0x30a078,
    setPage: _0x52fa15,
    setCurrentBusiness: _0x4c5888
  } = R();
  return (() => {
    const _0x3086af = at();
    const _0x2b556 = _0x3086af.firstChild;
    const _0x29ab28 = _0x2b556.firstChild;
    const _0x270107 = _0x29ab28.nextSibling;
    const _0x312efd = _0x270107.firstChild;
    const _0x3be81b = _0x312efd.nextSibling;
    const _0x101d1e = _0x2b556.nextSibling;
    const _0x24e5f4 = _0x101d1e.nextSibling;
    _0x29ab28.$$click = () => {
      _0x52fa15("overview");
      _0x4c5888(null);
    };
    _0x1a6512(_0x3be81b, () => _0x30a078()?.name);
    _0x1a6512(_0x24e5f4, () => _0x5e69be.children);
    _0x3dcaad(_0xb65aa0 => {
      const _0x497dd1 = Be.container;
      const _0x448a69 = Be.divider;
      if (_0x497dd1 !== _0xb65aa0._v$) {
        _0x111484(_0x3086af, _0xb65aa0._v$ = _0x497dd1);
      }
      if (_0x448a69 !== _0xb65aa0._v$2) {
        _0x111484(_0x101d1e, _0xb65aa0._v$2 = _0x448a69);
      }
      return _0xb65aa0;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    return _0x3086af;
  })();
};
_0x68661b(["click"]);
const ut = "_container_1e9z5_1";
const dt = {
  container: ut
};
const _t = _0x5f5d63("<div>");
const ve = _0x4e9c82 => (() => {
  const _0x36d97b = _t();
  _0x1a6512(_0x36d97b, () => _0x4e9c82.children);
  _0x3dcaad(() => _0x111484(_0x36d97b, dt.container));
  return _0x36d97b;
})();
const vt = "_container_4r8ne_1";
const ft = {
  container: vt
};
const $t = "_container_18q04_1";
const mt = {
  container: $t
};
const ht = _0x5f5d63("<div><i class=\"fa-regular fa-search\"></i><input type=\"text\" placeholder=\"Search...\">");
const gt = () => {
  const {
    searchText: _0xa40529,
    setSearchText: _0x42e899
  } = R();
  return (() => {
    const _0x399c4a = ht();
    const _0x1017d5 = _0x399c4a.firstChild;
    const _0x310ada = _0x1017d5.nextSibling;
    _0x310ada.$$input = _0x635cd0 => {
      _0x42e899(_0x635cd0.currentTarget.value);
    };
    _0x3dcaad(() => _0x111484(_0x399c4a, mt.container));
    _0x3dcaad(() => _0x310ada.value = _0xa40529());
    return _0x399c4a;
  })();
};
_0x68661b(["input"]);
const bt = _0x5f5d63("<div><p></p><div class=\"flex flex-row items-center justify-end gap-[1vh]\">");
const se = _0x3400fe => (() => {
  const _0x2dbd73 = bt();
  const _0x444bfa = _0x2dbd73.firstChild;
  const _0x21b8f7 = _0x444bfa.nextSibling;
  _0x1a6512(_0x444bfa, () => _0x3400fe.title);
  _0x1a6512(_0x21b8f7, _0xf418b(_0x47d980, {
    get when() {
      return !_0x3400fe.noSearch;
    },
    get children() {
      return _0xf418b(gt, {});
    }
  }), null);
  _0x1a6512(_0x21b8f7, () => _0x3400fe.children, null);
  _0x3dcaad(() => _0x111484(_0x2dbd73, ft.container));
  return _0x2dbd73;
})();
const yt = "_container_1r8qo_1";
const xt = "_box_1r8qo_13";
const wt = "_button_1r8qo_37";
const $e = {
  container: yt,
  box: xt,
  button: wt,
  delete: "_delete_1r8qo_66"
};
const pt = _0x5f5d63("<div><div class=\"flex flex-row items-center justify-start gap-[3vh]\"><div><i class=\"fa-solid fa-store\"></i></div><p></div><p></p><p></p><p></p><div class=\"flex flex-row items-center justify-end gap-[1vh]\"><div>Edit</div><div>Delete");
const Ct = _0x5ee519 => {
  const {
    config: _0x5d48d6,
    setPage: _0xdf9b90,
    setCurrentAdminBusinessId: _0x25c01d,
    setInput: _0x2be77e,
    refetchBusinesses: _0xf64733
  } = R();
  const _0x36247b = async () => {
    _0x2be77e({
      title: "Delete Business",
      description: "Are you sure you want to delete " + _0x5ee519.name + "?",
      inputs: {},
      onConfirm: async () => {
        _0x309ae3("business", "Processing...");
        if (!(await _0x43970e.execute("business:deleteBusiness", _0x5ee519.id))) {
          _0x309ae3("business", "Failed to delete business");
        }
        _0x309ae3("business", "Business deleted");
        _0xf64733();
      }
    });
  };
  return (() => {
    const _0x41c539 = pt();
    const _0x4bd96a = _0x41c539.firstChild;
    const _0x19da44 = _0x4bd96a.firstChild;
    const _0x55756d = _0x19da44.nextSibling;
    const _0x46a455 = _0x4bd96a.nextSibling;
    const _0x344981 = _0x46a455.nextSibling;
    const _0x573bfb = _0x344981.nextSibling;
    const _0x5e028a = _0x573bfb.nextSibling;
    const _0x1262b5 = _0x5e028a.firstChild;
    const _0x262cbb = _0x1262b5.nextSibling;
    _0x1a6512(_0x55756d, () => _0x5ee519.name);
    _0x1a6512(_0x46a455, () => _0x5d48d6()?.businessTypes[_0x5ee519.type] ?? "Unknown");
    _0x1a6512(_0x344981, () => _0x5ee519.account_id);
    _0x1a6512(_0x573bfb, () => _0x5ee519.owner_id);
    _0x1262b5.$$click = () => {
      _0x25c01d(_0x5ee519.id);
      _0xdf9b90("edit");
    };
    _0x262cbb.$$click = async () => {
      await _0x36247b();
    };
    _0x3dcaad(_0x4034a0 => {
      const _0x1f5d0d = $e.container;
      const _0x5ece3e = $e.box;
      const _0x4ffe09 = $e.delete;
      const _0x2c807f = $e.delete;
      if (_0x1f5d0d !== _0x4034a0._v$) {
        _0x111484(_0x41c539, _0x4034a0._v$ = _0x1f5d0d);
      }
      if (_0x5ece3e !== _0x4034a0._v$2) {
        _0x111484(_0x19da44, _0x4034a0._v$2 = _0x5ece3e);
      }
      if (_0x4ffe09 !== _0x4034a0._v$3) {
        _0x111484(_0x1262b5, _0x4034a0._v$3 = _0x4ffe09);
      }
      if (_0x2c807f !== _0x4034a0._v$4) {
        _0x111484(_0x262cbb, _0x4034a0._v$4 = _0x2c807f);
      }
      return _0x4034a0;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined
    });
    return _0x41c539;
  })();
};
_0x68661b(["click"]);
const kt = "_container_1lu29_1";
const Bt = {
  container: kt
};
const At = _0x5f5d63("<div><div class=\"mb-[2vh] flex h-full w-full flex-col items-start justify-start gap-[0.5vh] overflow-auto pr-[1vh]\">");
const St = () => {
  const {
    businesses: _0x470914,
    searchText: _0x3f5265
  } = R();
  return (() => {
    const _0x3dcb25 = At();
    const _0x495c74 = _0x3dcb25.firstChild;
    _0x1a6512(_0x3dcb25, _0xf418b(ve, {
      children: "Businesses"
    }), _0x495c74);
    _0x1a6512(_0x3dcb25, _0xf418b(se, {
      title: "Business Name - Type - Bank Account - Owner"
    }), _0x495c74);
    _0x1a6512(_0x495c74, _0xf418b(_0x2d60a2, {
      get each() {
        return _0x470914()?.filter(_0x198388 => _0x198388.name.toLowerCase().includes(_0x3f5265().toLowerCase()) || _0x198388.account_id.toString().toLowerCase().includes(_0x3f5265().toLowerCase()) || _0x198388.owner_id.toString().toLowerCase().includes(_0x3f5265().toLowerCase()));
      },
      children: _0x4cb932 => _0xf418b(Ct, _0x4cb932)
    }));
    _0x3dcaad(() => _0x111484(_0x3dcb25, Bt.container));
    return _0x3dcb25;
  })();
};
const Ae = "" + new URL("x_error-a32a5c81.png", import.meta.url).href;
const Rt = "_type_un4fb_1";
const jt = "_active_un4fb_26";
const Se = {
  type: Rt,
  active: jt
};
const Et = _0x5f5d63("<div class=\"flex w-full flex-wrap items-center justify-center gap-[1vh]\">");
const It = _0x5f5d63("<div>");
const we = _0x3083a6 => {
  const {
    config: _0x2051a8
  } = R();
  return _0xf418b(_0x47d980, {
    get when() {
      return _0x2051a8();
    },
    get children() {
      const _0x441c04 = Et();
      _0x1a6512(_0x441c04, _0xf418b(_0x2d60a2, {
        get each() {
          return Object.entries(_0x2051a8().businessTypes);
        },
        children: ([_0x22e05f, _0x250dc7]) => (() => {
          const _0x1ee4d0 = It();
          _0x1ee4d0.$$click = () => {
            _0x3083a6.onClick(_0x22e05f);
          };
          _0x1a6512(_0x1ee4d0, _0x250dc7);
          _0x3dcaad(_0x4aaf8c => {
            const _0x46448f = Se.type;
            const _0x42bdec = {
              [Se.active]: _0x3083a6.isActive(_0x22e05f)
            };
            if (_0x46448f !== _0x4aaf8c._v$) {
              _0x111484(_0x1ee4d0, _0x4aaf8c._v$ = _0x46448f);
            }
            _0x4aaf8c._v$2 = _0x3aa50d(_0x1ee4d0, _0x42bdec, _0x4aaf8c._v$2);
            return _0x4aaf8c;
          }, {
            _v$: undefined,
            _v$2: undefined
          });
          return _0x1ee4d0;
        })()
      }));
      return _0x441c04;
    }
  });
};
_0x68661b(["click"]);
const Pt = "_container_8s1j0_1";
const qt = "_box_8s1j0_13";
const Tt = "_button_8s1j0_36";
const Ot = "_kick_8s1j0_65";
const me = {
  container: Pt,
  box: qt,
  button: Tt,
  kick: Ot
};
const Lt = _0x5f5d63("<div>Kick");
const Dt = _0x5f5d63("<div><div class=\"flex flex-row items-center justify-start gap-[3vh]\"><div><i class=\"fas fa-user\"></i></div><p> </div><div class=\"flex flex-row items-center justify-end gap-[1vh]\">");
const Nt = _0x5f5d63("<div><i>");
const Ve = _0x4f8ce8 => {
  const {
    setInput: _0x3c984b,
    businessRoles: _0x4dfd75,
    refetchBusinessEmployees: _0x5111ff,
    hasPermission: _0x45dd1c,
    currentBusinessId: _0x1dd921
  } = R();
  const _0xc827a2 = _0x4482d9(() => {
    if (!_0x45dd1c("fire")) {
      return false;
    }
    const _0x3a3833 = _0x4dfd75()?.find(_0xbf9ec8 => _0xbf9ec8.id === _0x4f8ce8.role_id);
    if (_0x3a3833) {
      return _0x3a3833.name !== "Owner";
    } else {
      return false;
    }
  });
  const _0x478987 = _0x4482d9(() => _0x4f8ce8.buttons?.filter(_0x537793 => typeof _0x537793.enabled == "function" ? _0x537793.enabled() : _0x537793.enabled));
  return (() => {
    const _0x411a03 = Dt();
    const _0x293f1d = _0x411a03.firstChild;
    const _0x3bf843 = _0x293f1d.firstChild;
    const _0x17a5d0 = _0x3bf843.nextSibling;
    const _0x127417 = _0x17a5d0.firstChild;
    const _0x1b1508 = _0x293f1d.nextSibling;
    _0x1a6512(_0x17a5d0, () => _0x4f8ce8.first_name, _0x127417);
    _0x1a6512(_0x17a5d0, () => _0x4f8ce8.last_name, null);
    _0x1a6512(_0x1b1508, _0xf418b(_0x47d980, {
      get when() {
        return _0x4482d9(() => !!_0x45dd1c("change_role"))() && _0x4dfd75()?.find(_0xbfe9ab => _0xbfe9ab.id === _0x4f8ce8.role_id)?.name !== "Owner";
      },
      get children() {
        return _0xf418b(_0x50553, _0x5243ca({
          class: "custom"
        }, () => _0x1ad1cf(_0x4dfd75()?.map(_0x4e59d4 => ({
          value: _0x4e59d4.id,
          label: _0x4e59d4.name
        })) ?? [], {
          key: "value"
        }), {
          placeholder: "No Rank",
          get initialValue() {
            return {
              value: _0x4f8ce8.role_id,
              label: _0x4dfd75()?.find(_0x57349d => _0x57349d.id === _0x4f8ce8.role_id)?.name ?? "No Rank"
            };
          },
          format: (_0x5ded46, _0x471ba0) => _0x471ba0 === "option" ? _0x5ded46.value.label : _0x5ded46.label,
          onChange: async _0x53a3ad => {
            if (!_0x53a3ad || typeof _0x53a3ad.value != "number" || _0x53a3ad.value === _0x4f8ce8.role_id) {
              return;
            }
            if (!(await _0x43970e.execute("business:setEmployeeRole", _0x1dd921(), _0x4f8ce8.id, +_0x53a3ad.value))) {
              _0x309ae3("business", "Failed to set role");
              return;
            }
            _0x309ae3("business", "Role set successfully");
            _0x5111ff();
          }
        }));
      }
    }), null);
    _0x1a6512(_0x1b1508, _0xf418b(_0x2d60a2, {
      get each() {
        return _0x478987();
      },
      children: _0x133316 => (() => {
        const _0x3c2dbe = Nt();
        const _0x4dbf7b = _0x3c2dbe.firstChild;
        _0x3c2dbe.$$click = () => {
          _0x133316.onClick();
        };
        _0x1a6512(_0x3c2dbe, () => _0x133316.label, null);
        _0x3dcaad(_0x5acb3 => {
          const _0x3cc954 = me.button;
          const _0x2c7ff6 = _0x133316.icon;
          if (_0x3cc954 !== _0x5acb3._v$3) {
            _0x111484(_0x3c2dbe, _0x5acb3._v$3 = _0x3cc954);
          }
          if (_0x2c7ff6 !== _0x5acb3._v$4) {
            _0x111484(_0x4dbf7b, _0x5acb3._v$4 = _0x2c7ff6);
          }
          return _0x5acb3;
        }, {
          _v$3: undefined,
          _v$4: undefined
        });
        return _0x3c2dbe;
      })()
    }), null);
    _0x1a6512(_0x1b1508, _0xf418b(_0x47d980, {
      get when() {
        return _0xc827a2();
      },
      get children() {
        const _0x485c95 = Lt();
        _0x485c95.$$click = () => {
          _0x3c984b(() => ({
            title: "Kick Employee",
            description: "Are you sure you want to kick this employee?",
            inputs: {},
            onConfirm: async () => {
              if (!(await _0x43970e.execute("business:kickEmployee", _0x1dd921(), _0x4f8ce8.id))) {
                _0x309ae3("business", "Failed to kick employee");
                return;
              }
              _0x309ae3("business", "Employee kicked successfully");
            }
          }));
        };
        _0x3dcaad(() => _0x111484(_0x485c95, me.kick));
        return _0x485c95;
      }
    }), null);
    _0x3dcaad(_0x4000d1 => {
      const _0x5ad380 = me.container;
      const _0x366a92 = me.box;
      if (_0x5ad380 !== _0x4000d1._v$) {
        _0x111484(_0x411a03, _0x4000d1._v$ = _0x5ad380);
      }
      if (_0x366a92 !== _0x4000d1._v$2) {
        _0x111484(_0x3bf843, _0x4000d1._v$2 = _0x366a92);
      }
      return _0x4000d1;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    return _0x411a03;
  })();
};
_0x68661b(["click"]);
const Ft = "_container_sy1ze_1";
const Mt = "_indicator_sy1ze_64";
const Re = {
  container: Ft,
  indicator: Mt
};
const Ut = _0x5f5d63("<textarea>");
const Jt = _0x5f5d63("<input>");
const Vt = _0x5f5d63("<div><div class=\"flex w-full flex-row items-center justify-start gap-[1vh]\"><div></div><h2>");
const W = ({
  type: _0x2a9188,
  text: _0x4319c8,
  textarea: _0x11dded,
  value: _0x46a8a3 = "",
  onInput: _0x1e5478,
  disabled: _0x27a452
}) => (() => {
  const _0x20a6de = Vt();
  const _0x8c7f98 = _0x20a6de.firstChild;
  const _0x32b078 = _0x8c7f98.firstChild;
  const _0x5c5c3d = _0x32b078.nextSibling;
  _0x1a6512(_0x5c5c3d, _0x4319c8);
  _0x1a6512(_0x20a6de, _0xf418b(_0x253663, {
    get children() {
      return [_0xf418b(_0x16436b, {
        when: _0x11dded,
        get children() {
          const _0x45db37 = Ut();
          _0x45db37.$$input = _0x364e91 => {
            _0x1e5478(_0x364e91.currentTarget.value);
          };
          _0x240b8b(_0x45db37, "placeholder", _0x4319c8);
          _0x45db37.value = _0x46a8a3;
          _0x45db37.disabled = _0x27a452;
          return _0x45db37;
        }
      }), _0xf418b(_0x16436b, {
        when: !_0x11dded,
        get children() {
          const _0x326df5 = Jt();
          _0x326df5.$$input = _0xcdb6d0 => {
            _0x1e5478(_0xcdb6d0.currentTarget.value);
          };
          _0x240b8b(_0x326df5, "type", _0x2a9188 ?? "text");
          _0x240b8b(_0x326df5, "placeholder", _0x4319c8);
          _0x326df5.value = _0x46a8a3;
          _0x326df5.disabled = _0x27a452;
          return _0x326df5;
        }
      })];
    }
  }), null);
  _0x3dcaad(_0x505bd1 => {
    const _0x138569 = Re.container;
    const _0x220f3c = Re.indicator;
    if (_0x138569 !== _0x505bd1._v$) {
      _0x111484(_0x20a6de, _0x505bd1._v$ = _0x138569);
    }
    if (_0x220f3c !== _0x505bd1._v$2) {
      _0x111484(_0x32b078, _0x505bd1._v$2 = _0x220f3c);
    }
    return _0x505bd1;
  }, {
    _v$: undefined,
    _v$2: undefined
  });
  return _0x20a6de;
})();
_0x68661b(["input"]);
const Qt = "_container_187o2_1";
const Ht = "_box_187o2_13";
const Wt = "_button_187o2_36";
const he = {
  container: Qt,
  box: Ht,
  button: Wt,
  delete: "_delete_187o2_65"
};
const Gt = _0x5f5d63("<div>Delete");
const Kt = _0x5f5d63("<div><div class=\"flex flex-row items-center justify-start gap-[3vh]\"><div><i class=\"fas fa-user\"></i></div><p></div><div class=\"flex flex-row items-center justify-end gap-[1vh]\">");
const Xt = _0x5f5d63("<div><i>");
const Qe = _0x2ef303 => {
  const {
    setInput: _0x31b360,
    refetchBusinessRoles: _0x2f39a4,
    hasPermission: _0x514597,
    currentBusinessId: _0xb2b7db
  } = R();
  const _0xa8746d = _0x4482d9(() => _0x2ef303.buttons?.filter(_0x247abf => _0x247abf.enabled));
  const _0x4b364f = () => {
    _0x31b360(() => ({
      title: "Delete Role",
      description: "Are you sure you want to delete this rank?",
      inputs: {},
      onConfirm: async () => {
        const [_0x2fbad3, _0x18e83f] = await _0x43970e.execute("business:deleteRole", _0xb2b7db(), _0x2ef303.id);
        _0x309ae3("business", _0x18e83f);
        if (_0x2fbad3) {
          _0x2f39a4();
        }
      }
    }));
  };
  return (() => {
    const _0x11b866 = Kt();
    const _0x51d1ec = _0x11b866.firstChild;
    const _0x2de858 = _0x51d1ec.firstChild;
    const _0x16804a = _0x2de858.nextSibling;
    const _0x186f4f = _0x51d1ec.nextSibling;
    _0x1a6512(_0x16804a, () => _0x2ef303.name);
    _0x1a6512(_0x186f4f, _0xf418b(_0x2d60a2, {
      get each() {
        return _0xa8746d();
      },
      children: _0x3759fd => (() => {
        const _0x515673 = Xt();
        const _0x52ce79 = _0x515673.firstChild;
        _0x28abb2(_0x515673, "click", _0x3759fd.onClick, true);
        _0x1a6512(_0x515673, () => _0x3759fd.label, null);
        _0x3dcaad(_0x43b3d8 => {
          const _0x18a4b8 = he.button;
          const _0x706358 = _0x3759fd.icon;
          if (_0x18a4b8 !== _0x43b3d8._v$3) {
            _0x111484(_0x515673, _0x43b3d8._v$3 = _0x18a4b8);
          }
          if (_0x706358 !== _0x43b3d8._v$4) {
            _0x111484(_0x52ce79, _0x43b3d8._v$4 = _0x706358);
          }
          return _0x43b3d8;
        }, {
          _v$3: undefined,
          _v$4: undefined
        });
        return _0x515673;
      })()
    }), null);
    _0x1a6512(_0x186f4f, _0xf418b(_0x47d980, {
      get when() {
        return _0x514597("change_role") && _0x2ef303.name !== "Owner";
      },
      get children() {
        const _0xd41bb1 = Gt();
        _0xd41bb1.$$click = _0x4b364f;
        _0x3dcaad(() => _0x111484(_0xd41bb1, he.delete));
        return _0xd41bb1;
      }
    }), null);
    _0x3dcaad(_0x3640ca => {
      const _0x5afd1a = he.container;
      const _0x195032 = he.box;
      if (_0x5afd1a !== _0x3640ca._v$) {
        _0x111484(_0x11b866, _0x3640ca._v$ = _0x5afd1a);
      }
      if (_0x195032 !== _0x3640ca._v$2) {
        _0x111484(_0x2de858, _0x3640ca._v$2 = _0x195032);
      }
      return _0x3640ca;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    return _0x11b866;
  })();
};
_0x68661b(["click"]);
const zt = "_container_1e6k1_1";
const Zt = "_imageContainer_1e6k1_9";
const Yt = "_fullButton_1e6k1_37";
const en = "_error_1e6k1_59";
const tn = "_disabled_1e6k1_65";
const nn = "_button_1e6k1_77";
const sn = "_active_1e6k1_102";
const rn = "_box_1e6k1_108";
const ln = "_inside_1e6k1_118";
const cn = "_green_1e6k1_133";
const M = {
  container: zt,
  imageContainer: Zt,
  fullButton: Yt,
  error: en,
  disabled: tn,
  button: nn,
  active: sn,
  box: rn,
  inside: ln,
  green: cn
};
const on = _0x5f5d63("<div class=\"flex w-full flex-row items-center justify-between\"><div class=\"flex flex-row items-center justify-start gap-[1vh]\"><div><div></div></div><span></div><span>");
const an = _0x5f5d63("<div>Create");
const un = _0x5f5d63("<div class=\"flex h-[95%] w-full flex-col items-center justify-end gap-[1vh] overflow-hidden\"><div class=\"flex w-full flex-col items-start justify-start gap-[1vh]\"><h1>Status</div><div></div><div>Reject");
const dn = _0x5f5d63("<div class=\"flex h-[95%] w-full flex-col items-center justify-between gap-[1vh] overflow-hidden\"><div class=\"flex h-full w-full flex-col items-start justify-start gap-[1vh]\"><h1>Employees List</h1><div class=\"flex h-full w-full flex-col items-start justify-start overflow-auto\"></div></div><div class=\"flex h-full w-full flex-col items-start justify-start gap-[1vh]\"><h1>Roles List</h1><div class=\"flex h-full w-full flex-col items-start justify-start overflow-auto\"></div></div><div>Save");
const _n = _0x5f5d63("<div><div class=\"flex h-full w-full flex-row items-start justify-between gap-[5vh] pr-[2vh]\"><div class=\"flex flex-col items-start justify-start gap-[1vh]\"><div><img></div><div><img>");
const je = _0x108512 => {
  const {
    currentAdminBusinessId: _0x419001,
    businessRequests: _0x1753ec
  } = R();
  const _0x23b4d4 = _0x4482d9(() => _0x1753ec()?.find(_0x5871e2 => _0x5871e2.id === _0x419001()));
  return (() => {
    const _0xddf8a1 = on();
    const _0x4969d5 = _0xddf8a1.firstChild;
    const _0x13096f = _0x4969d5.firstChild;
    const _0x2d961f = _0x13096f.firstChild;
    const _0x4164b1 = _0x13096f.nextSibling;
    const _0x1e0d41 = _0x4969d5.nextSibling;
    _0x1a6512(_0x4164b1, () => _0x108512.text);
    _0x1a6512(_0x1e0d41, () => _0x23b4d4()?.[_0x108512.key] ? "Approved" : "Pending");
    _0x3dcaad(_0x3f94b5 => {
      const _0xafdb6d = M.box;
      const _0x2462c2 = M.inside;
      const _0x38c207 = {
        [M.green]: true
      };
      if (_0xafdb6d !== _0x3f94b5._v$) {
        _0x111484(_0x13096f, _0x3f94b5._v$ = _0xafdb6d);
      }
      if (_0x2462c2 !== _0x3f94b5._v$2) {
        _0x111484(_0x2d961f, _0x3f94b5._v$2 = _0x2462c2);
      }
      _0x3f94b5._v$3 = _0x3aa50d(_0x1e0d41, _0x38c207, _0x3f94b5._v$3);
      return _0x3f94b5;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined
    });
    return _0xddf8a1;
  })();
};
const Ee = () => {
  const {
    setInput: _0xc7687f,
    page: _0x3929f9,
    businesses: _0x4934a8,
    businessRequests: _0x29db7b,
    businessEmployees: _0x4f34ba,
    businessRoles: _0x10f5a1,
    currentAdminBusinessId: _0x27540e,
    setCurrentAdminBusinessId: _0x278533,
    refetchBusinessEmployees: _0x1404d3,
    refetchBusinessRoles: _0x4e974c,
    refetchBusinesses: _0x39882c,
    refetchBusinessRequests: _0xbf6952,
    searchText: _0x25fc90,
    setPage: _0x4b403f,
    isMayor: _0x4fdaf5,
    isDOJ: _0x339359
  } = R();
  _0x4faf69(() => {
    _0x1404d3();
    _0x4e974c();
  });
  _0x4316b4(() => {
    _0x278533(null);
  });
  const _0x351c88 = _0x4482d9(() => _0x3929f9() === "edit_request" ? _0x29db7b()?.find(_0x347ae9 => _0x347ae9.id === _0x27540e()) : _0x4934a8()?.find(_0x425836 => _0x425836.id === _0x27540e()));
  const _0x10b87f = _0x4482d9(() => _0x4fdaf5() ? !_0x351c88().mayor_approved : _0x339359() ? !_0x351c88().admin_approved : true);
  const [_0x312d8d, _0x2843e8] = _0x315e66({});
  const _0x5a4554 = async () => {
    _0x309ae3("business", "Processing...");
    if (!(await _0x43970e.execute("business:updateBusinessInfo", {
      ..._0x312d8d,
      id: _0x351c88()?.id
    }))) {
      _0x309ae3("business", "Failed to update business");
      return;
    }
    _0x309ae3("business", "Business updated successfully");
    _0x39882c();
    _0x4b403f("businesses");
  };
  const _0x2b00a2 = async () => {
    _0xc7687f(() => ({
      title: "Confirm",
      description: "Are you sure you want to confirm this business?",
      inputs: {},
      onConfirm: async () => {
        _0xc7687f(null);
        _0x309ae3("business", "Processing...");
        if (!(await _0x43970e.execute("business:confirmBusiness", _0x351c88()?.id))) {
          _0x309ae3("business", "Failed to confirm business");
          return;
        }
        _0x309ae3("business", "Business confirmed successfully");
        _0x39882c();
        _0xbf6952();
        _0x4b403f("requests");
      }
    }));
  };
  const _0x123bed = async () => {
    _0xc7687f(() => ({
      title: "Reject",
      description: "Are you sure you want to reject this business?",
      inputs: {},
      onConfirm: async () => {
        if (!(await _0x43970e.execute("business:rejectBusiness", _0x351c88()?.id))) {
          _0x309ae3("business", "Failed to reject business");
          return;
        }
        _0x309ae3("business", "Business rejected successfully");
        _0xbf6952();
        _0x4b403f("requests");
      }
    }));
  };
  const _0x1bfe89 = async () => {
    _0xc7687f(() => ({
      title: "Approve",
      description: "Are you sure you want to approve this business?",
      inputs: {},
      onConfirm: async () => {
        if (!(await _0x43970e.execute("business:approveBusiness", _0x351c88()?.id))) {
          _0x309ae3("business", "Failed to approve business");
          return;
        }
        _0x309ae3("business", "Business approved successfully");
        _0xbf6952();
        _0x4b403f("requests");
      }
    }));
  };
  return _0xf418b(_0x47d980, {
    get when() {
      return _0x351c88();
    },
    get children() {
      const _0x2c75f5 = _n();
      const _0x18e144 = _0x2c75f5.firstChild;
      const _0x45a6a9 = _0x18e144.firstChild;
      const _0x10d546 = _0x45a6a9.firstChild;
      const _0x2e9e53 = _0x10d546.firstChild;
      const _0x48ed79 = _0x10d546.nextSibling;
      const _0x56ae15 = _0x48ed79.firstChild;
      _0x1a6512(_0x2c75f5, _0xf418b(ve, {
        get children() {
          return _0x351c88()?.name;
        }
      }), _0x18e144);
      _0x1a6512(_0x45a6a9, _0xf418b(W, {
        text: "Name",
        get value() {
          return _0x351c88()?.name;
        },
        onInput: _0x21c31b => _0x2843e8("name", _0x21c31b),
        get disabled() {
          return _0x3929f9() === "edit_request";
        }
      }), _0x10d546);
      _0x1a6512(_0x45a6a9, _0xf418b(W, {
        text: "Owner",
        get value() {
          return _0x351c88()?.owner_id;
        },
        onInput: _0x2aecb0 => _0x2843e8("owner_id", +_0x2aecb0),
        get disabled() {
          return _0x3929f9() === "edit_request";
        }
      }), _0x10d546);
      _0x1a6512(_0x45a6a9, _0xf418b(W, {
        text: "Location Image",
        get value() {
          return _0x351c88()?.image;
        },
        onInput: _0xb19bfb => _0x2843e8("image", _0xb19bfb),
        get disabled() {
          return _0x3929f9() === "edit_request";
        }
      }), _0x10d546);
      _0x2e9e53.addEventListener("error", _0x4fc8e6 => {
        _0x4fc8e6.currentTarget.src = Ae;
        _0x4fc8e6.currentTarget.style.setProperty("object-fit", "contain");
      });
      _0x240b8b(_0x2e9e53, "draggable", false);
      _0x1a6512(_0x45a6a9, _0xf418b(W, {
        text: "Logo Image",
        get value() {
          return _0x351c88()?.logo_image;
        },
        onInput: _0x4fcd0b => _0x2843e8("logo_image", _0x4fcd0b),
        get disabled() {
          return _0x3929f9() === "edit_request";
        }
      }), _0x48ed79);
      _0x56ae15.addEventListener("error", _0x199c16 => {
        _0x199c16.currentTarget.src = Ae;
        _0x199c16.currentTarget.style.setProperty("object-fit", "contain");
      });
      _0x240b8b(_0x56ae15, "draggable", false);
      _0x1a6512(_0x18e144, _0xf418b(_0x253663, {
        get children() {
          return [_0xf418b(_0x16436b, {
            get when() {
              return _0x3929f9() === "edit_request";
            },
            get children() {
              const _0x54828b = un();
              const _0x27ae5f = _0x54828b.firstChild;
              _0x27ae5f.firstChild;
              const _0x269dbb = _0x27ae5f.nextSibling;
              const _0xd94f12 = _0x269dbb.nextSibling;
              _0x1a6512(_0x54828b, _0xf418b(W, {
                text: "Description",
                get value() {
                  return _0x351c88()?.description;
                },
                textarea: true,
                onInput: _0xc1c607 => _0x2843e8("description", _0xc1c607),
                get disabled() {
                  return _0x3929f9() === "edit_request";
                }
              }), _0x27ae5f);
              _0x1a6512(_0x54828b, _0xf418b(we, {
                isActive: _0x3de490 => _0x351c88()?.type === _0x3de490,
                onClick: _0x16b009 => _0x2843e8("type", _0x16b009)
              }), _0x27ae5f);
              _0x1a6512(_0x27ae5f, _0xf418b(je, {
                text: "Mayor",
                key: "mayor_approved"
              }), null);
              _0x1a6512(_0x27ae5f, _0xf418b(je, {
                text: "Judge",
                key: "admin_approved"
              }), null);
              _0x269dbb.$$click = async () => {
                if (_0x10b87f()) {
                  await _0x1bfe89();
                }
              };
              _0x1a6512(_0x269dbb, () => _0x10b87f() ? "Approve" : "Approved");
              _0x1a6512(_0x54828b, _0xf418b(_0x47d980, {
                get when() {
                  return _0x4482d9(() => !!_0x351c88().mayor_approved)() && _0x351c88().admin_approved;
                },
                get children() {
                  const _0x348edc = an();
                  _0x348edc.$$click = async () => {
                    await _0x2b00a2();
                  };
                  _0x3dcaad(() => _0x111484(_0x348edc, M.fullButton));
                  return _0x348edc;
                }
              }), _0xd94f12);
              _0xd94f12.$$click = async () => {
                await _0x123bed();
              };
              _0x3dcaad(_0x558632 => {
                const _0x282659 = M.fullButton;
                const _0x64e360 = {
                  [M.disabled]: !_0x10b87f()
                };
                const _0x52d520 = M.fullButton;
                const _0x1898c8 = {
                  [M.error]: true
                };
                if (_0x282659 !== _0x558632._v$4) {
                  _0x111484(_0x269dbb, _0x558632._v$4 = _0x282659);
                }
                _0x558632._v$5 = _0x3aa50d(_0x269dbb, _0x64e360, _0x558632._v$5);
                if (_0x52d520 !== _0x558632._v$6) {
                  _0x111484(_0xd94f12, _0x558632._v$6 = _0x52d520);
                }
                _0x558632._v$7 = _0x3aa50d(_0xd94f12, _0x1898c8, _0x558632._v$7);
                return _0x558632;
              }, {
                _v$4: undefined,
                _v$5: undefined,
                _v$6: undefined,
                _v$7: undefined
              });
              return _0x54828b;
            }
          }), _0xf418b(_0x16436b, {
            get when() {
              return _0x3929f9() === "edit";
            },
            get children() {
              const _0x114669 = dn();
              const _0x1fa834 = _0x114669.firstChild;
              const _0x26f53b = _0x1fa834.firstChild;
              const _0x28401b = _0x26f53b.nextSibling;
              const _0x4fda33 = _0x1fa834.nextSibling;
              const _0x4261fc = _0x4fda33.firstChild;
              const _0x286bba = _0x4261fc.nextSibling;
              const _0x4537a6 = _0x4fda33.nextSibling;
              _0x1a6512(_0x114669, _0xf418b(W, {
                text: "Description",
                get value() {
                  return _0x351c88()?.description;
                },
                textarea: true,
                onInput: _0x1abb66 => _0x2843e8("description", _0x1abb66),
                get disabled() {
                  return _0x3929f9() === "edit_request";
                }
              }), _0x1fa834);
              _0x1a6512(_0x114669, _0xf418b(we, {
                isActive: _0x2aaf5e => _0x351c88()?.type === _0x2aaf5e,
                onClick: _0x40c362 => _0x2843e8("type", _0x40c362)
              }), _0x1fa834);
              _0x1a6512(_0x1fa834, _0xf418b(se, {
                title: "Employees"
              }), _0x28401b);
              _0x1a6512(_0x28401b, _0xf418b(_0x2d60a2, {
                get each() {
                  return _0x4f34ba()?.filter(_0x3e4bf5 => (_0x3e4bf5.first_name + " " + _0x3e4bf5.last_name).toLowerCase().includes(_0x25fc90().toLowerCase()));
                },
                children: _0x35a77b => _0xf418b(Ve, _0x35a77b)
              }));
              _0x1a6512(_0x4fda33, _0xf418b(se, {
                title: "Roles",
                noSearch: true
              }), _0x286bba);
              _0x1a6512(_0x286bba, _0xf418b(_0x2d60a2, {
                get each() {
                  return _0x10f5a1();
                },
                children: _0x560735 => _0xf418b(Qe, _0x560735)
              }));
              _0x4537a6.$$click = async () => {
                await _0x5a4554();
              };
              _0x3dcaad(() => _0x111484(_0x4537a6, M.fullButton));
              return _0x114669;
            }
          })];
        }
      }), null);
      _0x3dcaad(_0x12033f => {
        const _0x2afded = M.container;
        const _0x55764f = M.imageContainer;
        const _0x970728 = _0x351c88()?.image;
        const _0x1398b6 = M.imageContainer;
        const _0x42376e = _0x351c88()?.logo_image;
        if (_0x2afded !== _0x12033f._v$8) {
          _0x111484(_0x2c75f5, _0x12033f._v$8 = _0x2afded);
        }
        if (_0x55764f !== _0x12033f._v$9) {
          _0x111484(_0x10d546, _0x12033f._v$9 = _0x55764f);
        }
        if (_0x970728 !== _0x12033f._v$10) {
          _0x240b8b(_0x2e9e53, "src", _0x12033f._v$10 = _0x970728);
        }
        if (_0x1398b6 !== _0x12033f._v$11) {
          _0x111484(_0x48ed79, _0x12033f._v$11 = _0x1398b6);
        }
        if (_0x42376e !== _0x12033f._v$12) {
          _0x240b8b(_0x56ae15, "src", _0x12033f._v$12 = _0x42376e);
        }
        return _0x12033f;
      }, {
        _v$8: undefined,
        _v$9: undefined,
        _v$10: undefined,
        _v$11: undefined,
        _v$12: undefined
      });
      return _0x2c75f5;
    }
  });
};
_0x68661b(["click"]);
const vn = "_container_dqc3s_1";
const fn = {
  container: vn
};
const $n = _0x5f5d63("<div><div class=\"flex w-full flex-row items-center justify-start gap-[1vh]\"><i></i><div class=\"flex flex-col items-start justify-start\"><h1></h1><h2></div></div><div class=\"flex w-full flex-col items-start justify-start\"><h1></h1><p>");
const ee = _0x1d941d => (() => {
  const _0x204f63 = $n();
  const _0x14bc34 = _0x204f63.firstChild;
  const _0x3bd9fa = _0x14bc34.firstChild;
  const _0x71052 = _0x3bd9fa.nextSibling;
  const _0x2667f8 = _0x71052.firstChild;
  const _0x10bb1b = _0x2667f8.nextSibling;
  const _0x243a74 = _0x14bc34.nextSibling;
  const _0x21c9af = _0x243a74.firstChild;
  const _0x44e723 = _0x21c9af.nextSibling;
  _0x1a6512(_0x2667f8, () => _0x1d941d.title);
  _0x1a6512(_0x10bb1b, () => _0x1d941d.text);
  _0x1a6512(_0x21c9af, () => _0x1d941d.bottomTitle);
  _0x1a6512(_0x44e723, () => _0x1d941d.bottomText);
  _0x3dcaad(_0x29f1e2 => {
    const _0x3fa810 = fn.container;
    const _0x143a92 = _0x1d941d.icon;
    if (_0x3fa810 !== _0x29f1e2._v$) {
      _0x111484(_0x204f63, _0x29f1e2._v$ = _0x3fa810);
    }
    if (_0x143a92 !== _0x29f1e2._v$2) {
      _0x111484(_0x3bd9fa, _0x29f1e2._v$2 = _0x143a92);
    }
    return _0x29f1e2;
  }, {
    _v$: undefined,
    _v$2: undefined
  });
  return _0x204f63;
})();
const mn = _0x5f5d63("<div class=\"flex h-full w-full flex-col items-start justify-start gap-[1vh] py-[2vh] pr-[5vh]\"><div class=\"flex w-full flex-row items-center justify-between\">");
const hn = () => {
  const {
    businesses: _0x46fdac,
    businessRequests: _0x128b01
  } = R();
  const _0x30c1b6 = _0x4482d9(() => _0x46fdac()?.length ?? 0);
  const _0x2c6259 = _0x4482d9(() => _0x128b01()?.length ?? 0);
  return (() => {
    const _0x547230 = mn();
    const _0x1520c5 = _0x547230.firstChild;
    _0x1a6512(_0x1520c5, _0xf418b(ee, {
      title: "Amount",
      text: "of Businesses",
      icon: "fa-solid fa-store",
      bottomTitle: "Total",
      get bottomText() {
        return _0x30c1b6();
      }
    }), null);
    _0x1a6512(_0x1520c5, _0xf418b(ee, {
      title: "Amount",
      text: "of Requests",
      icon: "fa-solid fa-bell",
      bottomTitle: "Total",
      get bottomText() {
        return _0x2c6259();
      }
    }), null);
    _0x1a6512(_0x1520c5, _0xf418b(ee, {
      title: "What's your",
      text: "Role",
      icon: "fa-solid fa-user",
      bottomTitle: "Role",
      bottomText: "Owner"
    }), null);
    return _0x547230;
  })();
};
const gn = "_container_1r8qo_1";
const bn = "_box_1r8qo_13";
const yn = "_button_1r8qo_37";
const be = {
  container: gn,
  box: bn,
  button: yn,
  delete: "_delete_1r8qo_66"
};
const xn = _0x5f5d63("<div><div class=\"flex flex-row items-center justify-start gap-[3vh]\"><div><i class=\"fa-solid fa-store\"></i></div><p></div><p></p><p></p><div class=\"flex flex-row items-center justify-end gap-[1vh]\"><div>View");
const wn = _0x263138 => {
  const {
    config: _0x1430fd,
    setPage: _0x326b57,
    setCurrentAdminBusinessId: _0x5d02aa
  } = R();
  return (() => {
    const _0x2146c9 = xn();
    const _0xe35bd6 = _0x2146c9.firstChild;
    const _0x426f64 = _0xe35bd6.firstChild;
    const _0x1e7577 = _0x426f64.nextSibling;
    const _0x21ca9d = _0xe35bd6.nextSibling;
    const _0x4f75c9 = _0x21ca9d.nextSibling;
    const _0x204fea = _0x4f75c9.nextSibling;
    const _0x50f934 = _0x204fea.firstChild;
    _0x1a6512(_0x1e7577, () => _0x263138.name);
    _0x1a6512(_0x21ca9d, () => _0x1430fd()?.businessTypes[_0x263138.type] ?? "Unknown");
    _0x1a6512(_0x4f75c9, () => _0x263138.owner_id);
    _0x50f934.$$click = () => {
      _0x5d02aa(_0x263138.id);
      _0x326b57("edit_request");
    };
    _0x3dcaad(_0x511eea => {
      const _0x5509b8 = be.container;
      const _0x3d31ad = be.box;
      const _0x57aae7 = be.delete;
      if (_0x5509b8 !== _0x511eea._v$) {
        _0x111484(_0x2146c9, _0x511eea._v$ = _0x5509b8);
      }
      if (_0x3d31ad !== _0x511eea._v$2) {
        _0x111484(_0x426f64, _0x511eea._v$2 = _0x3d31ad);
      }
      if (_0x57aae7 !== _0x511eea._v$3) {
        _0x111484(_0x50f934, _0x511eea._v$3 = _0x57aae7);
      }
      return _0x511eea;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined
    });
    return _0x2146c9;
  })();
};
_0x68661b(["click"]);
const pn = "_container_1lu29_1";
const Cn = {
  container: pn
};
const kn = _0x5f5d63("<div><div class=\"mb-[2vh] flex h-full w-full flex-col items-start justify-start gap-[0.5vh] overflow-auto pr-[1vh]\">");
const Bn = () => {
  const {
    businessRequests: _0x1d2285,
    searchText: _0x42ec61
  } = R();
  return (() => {
    const _0x4a20be = kn();
    const _0x1d705a = _0x4a20be.firstChild;
    _0x1a6512(_0x4a20be, _0xf418b(ve, {
      children: "Requests"
    }), _0x1d705a);
    _0x1a6512(_0x4a20be, _0xf418b(se, {
      title: "Business Name - Type - Owner"
    }), _0x1d705a);
    _0x1a6512(_0x1d705a, _0xf418b(_0x2d60a2, {
      get each() {
        return _0x1d2285()?.filter(_0x1a51bd => _0x1a51bd.name.toLowerCase().includes(_0x42ec61().toLowerCase()) || _0x1a51bd.owner_id.toString().toLowerCase().includes(_0x42ec61().toLowerCase()));
      },
      children: _0x240834 => _0xf418b(wn, _0x240834)
    }));
    _0x3dcaad(() => _0x111484(_0x4a20be, Cn.container));
    return _0x4a20be;
  })();
};
const An = () => {
  const {
    page: _0x1473d9,
    setPage: _0x47c5e3,
    refetchBusinesses: _0x13b66f,
    refetchBusinessRequests: _0x20764e
  } = R();
  _0x4faf69(() => {
    _0x47c5e3("overview");
    _0x13b66f();
    _0x20764e();
  });
  const _0x1a7ab3 = {
    overview: {
      render: () => _0xf418b(hn, {})
    },
    businesses: {
      render: () => _0xf418b(St, {})
    },
    edit: {
      render: () => _0xf418b(Ee, {})
    },
    requests: {
      render: () => _0xf418b(Bn, {})
    },
    edit_request: {
      render: () => _0xf418b(Ee, {})
    }
  };
  return [_0xf418b(Je, {
    get children() {
      return [_0xf418b(ne, {
        label: "Overview",
        page: "overview",
        icon: "fa-light fa-chart-mixed"
      }), _0xf418b(ne, {
        label: "Businesses",
        page: "businesses",
        icon: "fa-light fa-store"
      }), _0xf418b(ne, {
        label: "Requests",
        page: "requests",
        icon: "fa-light fa-bell"
      })];
    }
  }), _0x4482d9(() => _0x1a7ab3[_0x1473d9()]?.render())];
};
const Sn = "_input_1wykw_1";
const Rn = "_container_1wykw_12";
const jn = "_title_1wykw_41";
const En = "_description_1wykw_50";
const In = "_inputContainer_1wykw_62";
const Pn = "_button_1wykw_90";
const qn = "_cancel_1wykw_120";
const Tn = "_switch_label_1wykw_136";
const U = {
  input: Sn,
  container: Rn,
  title: jn,
  description: En,
  inputContainer: In,
  button: Pn,
  cancel: qn,
  switch_label: Tn
};
const On = "_container_1e5m9_1";
const Ln = "_handle_1e5m9_11";
const Ie = {
  container: On,
  handle: Ln
};
const Dn = _0x5f5d63("<div>");
const Nn = _0x1b86a9 => (() => {
  const _0x49817d = Dn();
  _0x28abb2(_0x49817d, "click", _0x1b86a9.onClick, true);
  _0x1a6512(_0x49817d, _0xf418b(_0x2e89cd.div, {
    get class() {
      return Ie.handle;
    }
  }));
  _0x3dcaad(_0x2307af => {
    const _0x511c4c = Ie.container;
    const _0x33d608 = _0x1b86a9.value;
    if (_0x511c4c !== _0x2307af._v$) {
      _0x111484(_0x49817d, _0x2307af._v$ = _0x511c4c);
    }
    if (_0x33d608 !== _0x2307af._v$2) {
      _0x240b8b(_0x49817d, "data-ison", _0x2307af._v$2 = _0x33d608);
    }
    return _0x2307af;
  }, {
    _v$: undefined,
    _v$2: undefined
  });
  return _0x49817d;
})();
_0x68661b(["click"]);
const Fn = "_customSelect_wmu30_1";
const Mn = "_dropdownOpen_wmu30_7";
const Un = "_selectButton_wmu30_11";
const Jn = "_open_wmu30_34";
const Vn = "_selectedText_wmu30_38";
const Qn = "_arrow_wmu30_47";
const Hn = "_rotated_wmu30_54";
const Wn = "_dropdown_wmu30_7";
const Gn = "_option_wmu30_86";
const Kn = "_selected_wmu30_38";
const H = {
  customSelect: Fn,
  dropdownOpen: Mn,
  selectButton: Un,
  open: Jn,
  selectedText: Vn,
  arrow: Qn,
  rotated: Hn,
  dropdown: Wn,
  option: Gn,
  selected: Kn
};
const Pe = _0x5f5d63("<div>");
const Xn = _0x5f5d63("<div><div><span></span><div><svg width=\"12\" height=\"12\" viewBox=\"0 0 12 12\" fill=\"none\"><path d=\"M3 4.5L6 7.5L9 4.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\">");
function zn(_0x49c048) {
  const [_0xba4f0a, _0x38b0c1] = _0x8488b5(false);
  const [_0x622e3a, _0x3be4a2] = _0x8488b5("");
  let _0x91e492;
  let _0x33e06c;
  const _0x832a41 = () => {
    const _0x1b7e0f = _0x49c048.options.find(_0xe916c0 => _0xe916c0.value === _0x49c048.value);
    _0x3be4a2(_0x1b7e0f?.label || "");
  };
  _0x4faf69(() => {
    _0x832a41();
  });
  const _0x273a85 = _0x3d13b1 => {
    if (_0x33e06c && !_0x33e06c.contains(_0x3d13b1.target)) {
      _0x38b0c1(false);
    }
  };
  _0x4faf69(() => {
    document.addEventListener("mousedown", _0x273a85);
  });
  _0x4316b4(() => {
    document.removeEventListener("mousedown", _0x273a85);
  });
  const _0x2bbd1f = _0x38e18f => {
    _0x49c048.onSelect(_0x38e18f);
    _0x832a41();
    _0x38b0c1(false);
  };
  const _0x1ac336 = () => {
    _0x38b0c1(!_0xba4f0a());
  };
  return (() => {
    const _0x2f36af = Xn();
    const _0x1c33dd = _0x2f36af.firstChild;
    const _0x5bd974 = _0x1c33dd.firstChild;
    const _0x38584d = _0x5bd974.nextSibling;
    const _0x5132b6 = _0x33e06c;
    if (typeof _0x5132b6 == "function") {
      _0x50516f(_0x5132b6, _0x2f36af);
    } else {
      _0x33e06c = _0x2f36af;
    }
    _0x1c33dd.$$click = _0x1ac336;
    _0x1a6512(_0x5bd974, () => _0x622e3a() || _0x49c048.placeholder || "Select an option");
    _0x1a6512(_0x2f36af, _0xf418b(_0x47d980, {
      get when() {
        return _0xba4f0a();
      },
      get children() {
        const _0x454c95 = Pe();
        const _0x2dcf83 = _0x91e492;
        if (typeof _0x2dcf83 == "function") {
          _0x50516f(_0x2dcf83, _0x454c95);
        } else {
          _0x91e492 = _0x454c95;
        }
        _0x1a6512(_0x454c95, _0xf418b(_0x2d60a2, {
          get each() {
            return _0x49c048.options;
          },
          children: _0x59eb8c => (() => {
            const _0x539fa3 = Pe();
            _0x539fa3.$$click = () => _0x2bbd1f(_0x59eb8c.value);
            _0x1a6512(_0x539fa3, () => _0x59eb8c.label);
            _0x3dcaad(_0x171144 => {
              const _0x386467 = H.option;
              const _0x7cd3c9 = {
                [H.selected]: _0x59eb8c.value === _0x49c048.value
              };
              if (_0x386467 !== _0x171144._v$8) {
                _0x111484(_0x539fa3, _0x171144._v$8 = _0x386467);
              }
              _0x171144._v$9 = _0x3aa50d(_0x539fa3, _0x7cd3c9, _0x171144._v$9);
              return _0x171144;
            }, {
              _v$8: undefined,
              _v$9: undefined
            });
            return _0x539fa3;
          })()
        }));
        _0x3dcaad(() => _0x111484(_0x454c95, H.dropdown));
        return _0x454c95;
      }
    }), null);
    _0x3dcaad(_0x47ae42 => {
      const _0x345434 = H.customSelect;
      const _0x2748ea = {
        [H.dropdownOpen]: _0xba4f0a()
      };
      const _0x358632 = H.selectButton;
      const _0x4fe4e3 = {
        [H.open]: _0xba4f0a()
      };
      const _0x17ba4d = H.selectedText;
      const _0x32820e = H.arrow;
      const _0xd6b8ee = {
        [H.rotated]: _0xba4f0a()
      };
      if (_0x345434 !== _0x47ae42._v$) {
        _0x111484(_0x2f36af, _0x47ae42._v$ = _0x345434);
      }
      _0x47ae42._v$2 = _0x3aa50d(_0x2f36af, _0x2748ea, _0x47ae42._v$2);
      if (_0x358632 !== _0x47ae42._v$3) {
        _0x111484(_0x1c33dd, _0x47ae42._v$3 = _0x358632);
      }
      _0x47ae42._v$4 = _0x3aa50d(_0x1c33dd, _0x4fe4e3, _0x47ae42._v$4);
      if (_0x17ba4d !== _0x47ae42._v$5) {
        _0x111484(_0x5bd974, _0x47ae42._v$5 = _0x17ba4d);
      }
      if (_0x32820e !== _0x47ae42._v$6) {
        _0x111484(_0x38584d, _0x47ae42._v$6 = _0x32820e);
      }
      _0x47ae42._v$7 = _0x3aa50d(_0x38584d, _0xd6b8ee, _0x47ae42._v$7);
      return _0x47ae42;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined
    });
    return _0x2f36af;
  })();
}
_0x68661b(["click"]);
const Zn = _0x5f5d63("<div><div><div></div><div></div><div class=\"flex w-full flex-row items-center justify-center gap-[0.5vh]\"><div><p></div><div><p>Cancel");
const Yn = _0x5f5d63("<div><input type=\"text\">");
const es = _0x5f5d63("<div><input type=\"number\">");
const ts = _0x5f5d63("<div class=\"flex w-full flex-row items-center justify-between gap-[0.5vh]\"><label>");
const ns = _0x5f5d63("<div>");
function ss() {
  const {
    input: _0x7df495,
    setInput: _0x4073a1
  } = R();
  const [_0xfe243, _0xb1fa3b] = _0x315e66({});
  _0xda1edb(() => {
    const _0x215715 = _0x7df495()?.inputs;
    if (_0x215715) {
      const _0x32c339 = Object.fromEntries(Object.entries(_0x215715).map(([_0x2cd04f, _0x4c89e9]) => [_0x2cd04f, _0x4c89e9._defaultValue ?? (_0x4c89e9.type === "checkbox" ? false : "")]));
      _0xb1fa3b(_0x32c339);
    }
  });
  return (() => {
    const _0xa6be60 = Zn();
    const _0x1358c5 = _0xa6be60.firstChild;
    const _0xb667d0 = _0x1358c5.firstChild;
    const _0x377321 = _0xb667d0.nextSibling;
    const _0x15b85c = _0x377321.nextSibling;
    const _0x1e25d5 = _0x15b85c.firstChild;
    const _0x4347bd = _0x1e25d5.firstChild;
    const _0x5817bf = _0x1e25d5.nextSibling;
    _0x1a6512(_0xb667d0, () => _0x7df495()?.title);
    _0x1a6512(_0x377321, () => _0x7df495()?.description);
    _0x1a6512(_0x1358c5, _0xf418b(_0x2d60a2, {
      get each() {
        if (_0x4482d9(() => !!_0x7df495())()) {
          return Object.entries(_0x7df495().inputs);
        } else {
          return [];
        }
      },
      children: ([_0x17f4e7, _0x30486d]) => _0xf418b(_0x253663, {
        get children() {
          return [_0xf418b(_0x16436b, {
            get when() {
              return _0x30486d.type === "text";
            },
            get children() {
              const _0x596108 = Yn();
              const _0x5af325 = _0x596108.firstChild;
              _0x5af325.$$input = _0x36aa93 => _0xb1fa3b(_0x17f4e7, _0x36aa93.target.value);
              _0x3dcaad(_0x3fba4d => {
                const _0x256da9 = U.inputContainer;
                const _0x30179f = _0x30486d.placeholder;
                if (_0x256da9 !== _0x3fba4d._v$8) {
                  _0x111484(_0x596108, _0x3fba4d._v$8 = _0x256da9);
                }
                if (_0x30179f !== _0x3fba4d._v$9) {
                  _0x240b8b(_0x5af325, "placeholder", _0x3fba4d._v$9 = _0x30179f);
                }
                return _0x3fba4d;
              }, {
                _v$8: undefined,
                _v$9: undefined
              });
              _0x3dcaad(() => _0x5af325.value = _0xfe243[_0x17f4e7]);
              return _0x596108;
            }
          }), _0xf418b(_0x16436b, {
            get when() {
              return _0x30486d.type === "number";
            },
            get children() {
              const _0x14b60c = es();
              const _0x28e711 = _0x14b60c.firstChild;
              _0x28e711.$$input = _0x58ff7c => _0xb1fa3b(_0x17f4e7, +_0x58ff7c.target.value);
              _0x3dcaad(_0x1657d8 => {
                const _0x5a4323 = U.inputContainer;
                const _0xfad5b2 = _0x30486d.placeholder;
                if (_0x5a4323 !== _0x1657d8._v$10) {
                  _0x111484(_0x14b60c, _0x1657d8._v$10 = _0x5a4323);
                }
                if (_0xfad5b2 !== _0x1657d8._v$11) {
                  _0x240b8b(_0x28e711, "placeholder", _0x1657d8._v$11 = _0xfad5b2);
                }
                return _0x1657d8;
              }, {
                _v$10: undefined,
                _v$11: undefined
              });
              _0x3dcaad(() => _0x28e711.value = _0xfe243[_0x17f4e7]);
              return _0x14b60c;
            }
          }), _0xf418b(_0x16436b, {
            get when() {
              return _0x30486d.type === "checkbox";
            },
            get children() {
              const _0x26ec0a = ts();
              const _0xf2722a = _0x26ec0a.firstChild;
              _0x1a6512(_0xf2722a, () => _0x30486d.placeholder);
              _0x1a6512(_0x26ec0a, _0xf418b(Nn, {
                get value() {
                  return _0xfe243[_0x17f4e7];
                },
                onClick: () => _0xb1fa3b(_0x17f4e7, !_0xfe243[_0x17f4e7])
              }), null);
              _0x3dcaad(() => _0x111484(_0xf2722a, U.switch_label));
              return _0x26ec0a;
            }
          }), _0xf418b(_0x16436b, {
            get when() {
              return _0x30486d.type === "select";
            },
            get children() {
              const _0x555959 = ns();
              _0x1a6512(_0x555959, _0xf418b(zn, {
                get value() {
                  return _0xfe243[_0x17f4e7] || "";
                },
                get options() {
                  return _0x30486d.options || [];
                },
                get placeholder() {
                  return _0x30486d.placeholder;
                },
                onSelect: _0x38cfe0 => _0xb1fa3b(_0x17f4e7, _0x38cfe0)
              }));
              _0x3dcaad(() => _0x111484(_0x555959, U.inputContainer));
              return _0x555959;
            }
          })];
        }
      })
    }), _0x15b85c);
    _0x1e25d5.$$click = async () => {
      await _0x7df495()?.onConfirm?.(_0xfe243);
      _0x4073a1(null);
    };
    _0x1a6512(_0x4347bd, () => _0x7df495()?.title);
    _0x5817bf.$$click = async () => {
      if (_0x7df495()?.onCancel) {
        await _0x7df495()?.onCancel?.();
      }
      _0x4073a1(null);
    };
    _0x3dcaad(_0x3269bc => {
      const _0x5ce7ae = U.input;
      const _0x288ee8 = U.container;
      const _0x3924ce = U.title;
      const _0x49f380 = U.description;
      const _0x319efb = U.button;
      const _0x595aee = U.button;
      const _0x519d2c = {
        [U.cancel]: true
      };
      if (_0x5ce7ae !== _0x3269bc._v$) {
        _0x111484(_0xa6be60, _0x3269bc._v$ = _0x5ce7ae);
      }
      if (_0x288ee8 !== _0x3269bc._v$2) {
        _0x111484(_0x1358c5, _0x3269bc._v$2 = _0x288ee8);
      }
      if (_0x3924ce !== _0x3269bc._v$3) {
        _0x111484(_0xb667d0, _0x3269bc._v$3 = _0x3924ce);
      }
      if (_0x49f380 !== _0x3269bc._v$4) {
        _0x111484(_0x377321, _0x3269bc._v$4 = _0x49f380);
      }
      if (_0x319efb !== _0x3269bc._v$5) {
        _0x111484(_0x1e25d5, _0x3269bc._v$5 = _0x319efb);
      }
      if (_0x595aee !== _0x3269bc._v$6) {
        _0x111484(_0x5817bf, _0x3269bc._v$6 = _0x595aee);
      }
      _0x3269bc._v$7 = _0x3aa50d(_0x5817bf, _0x519d2c, _0x3269bc._v$7);
      return _0x3269bc;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined
    });
    return _0xa6be60;
  })();
}
_0x68661b(["click", "input"]);
const is = "_container_6zebn_1";
const rs = "_loading_6zebn_35";
const qe = {
  container: is,
  loading: rs
};
const Te = "" + new URL("loading_logo-450a9fc1.png", import.meta.url).href;
const ls = _0x5f5d63("<div><div class=\"jsutify-center relative flex flex-col items-center\"><img class=\"z-50\" alt=\"Loading...\"><img class=\"absolute blur-[8vh]\" alt=\"Loading...\"></div><h1>Welcome to Business Application</h1><p>This application allows you to manage your business, employees, and requests. Please wait while the application is loading.</p><div>Application is loading...");
const He = () => (() => {
  const _0x3e1d90 = ls();
  const _0xa16d43 = _0x3e1d90.firstChild;
  const _0xa0c14c = _0xa16d43.firstChild;
  const _0x2ad1b0 = _0xa0c14c.nextSibling;
  const _0x5eb71d = _0xa16d43.nextSibling;
  const _0x3911e7 = _0x5eb71d.nextSibling;
  const _0x432d0f = _0x3911e7.nextSibling;
  _0x240b8b(_0xa0c14c, "src", Te);
  _0x240b8b(_0xa0c14c, "draggable", false);
  _0x240b8b(_0x2ad1b0, "src", Te);
  _0x240b8b(_0x2ad1b0, "draggable", false);
  _0x3dcaad(_0xb6bffa => {
    const _0x5cf737 = qe.container;
    const _0x44d2cc = qe.loading;
    if (_0x5cf737 !== _0xb6bffa._v$) {
      _0x111484(_0x3e1d90, _0xb6bffa._v$ = _0x5cf737);
    }
    if (_0x44d2cc !== _0xb6bffa._v$2) {
      _0x111484(_0x432d0f, _0xb6bffa._v$2 = _0x44d2cc);
    }
    return _0xb6bffa;
  }, {
    _v$: undefined,
    _v$2: undefined
  });
  return _0x3e1d90;
})();
const cs = "_container_9kngg_1";
const os = "_header_9kngg_14";
const as = "_newRequest_9kngg_40";
const us = "_box_9kngg_62";
const ds = "_business_9kngg_82";
const _s = "_pending_9kngg_139";
const te = {
  container: cs,
  header: os,
  newRequest: as,
  box: us,
  business: ds,
  pending: _s
};
const vs = _0x5f5d63("<h1>Status");
const fs = _0x5f5d63("<p>Pending");
const $s = _0x5f5d63("<h1>Account");
const ms = _0x5f5d63("<p>");
const hs = _0x5f5d63("<div><div class=\"flex w-full flex-row items-center justify-start gap-[1vh]\"><i class=\"fa-solid fa-briefcase\"></i><div class=\"flex flex-col items-start justify-start\"><h1>Business Name</h1><h2></div></div><div class=\"flex w-full flex-col items-start justify-start\">");
const gs = _0x5f5d63("<div><div><div class=\"flex flex-col items-start justify-start\"><h1>BUSINESS AREA</h1><p>Select the business you want to access</div><div><div><i class=\"fa-light fa-square-plus\"></i></div>New Request</div></div><div class=\"grid-rows-auto mt-[8vh] grid h-full w-full auto-rows-max grid-cols-4\">");
const ye = _0x34037e => {
  const {
    setCurrentBusiness: _0x3a45f6
  } = R();
  return (() => {
    const _0x33d1f5 = hs();
    const _0x32301e = _0x33d1f5.firstChild;
    const _0x4c53af = _0x32301e.firstChild;
    const _0x107715 = _0x4c53af.nextSibling;
    const _0x2abd96 = _0x107715.firstChild;
    const _0x5cffb2 = _0x2abd96.nextSibling;
    const _0x591e31 = _0x32301e.nextSibling;
    _0x33d1f5.$$click = () => {
      if (_0x34037e.isPending) {
        _0x2f1466("This business is still pending, you can't access it yet", "error");
        return;
      }
      _0x3a45f6(_0x34037e.id);
    };
    _0x1a6512(_0x5cffb2, () => _0x34037e.name);
    _0x1a6512(_0x591e31, _0xf418b(_0x253663, {
      get children() {
        return [_0xf418b(_0x16436b, {
          get when() {
            return _0x34037e.isPending;
          },
          get children() {
            return [vs(), fs()];
          }
        }), _0xf418b(_0x16436b, {
          get when() {
            return !_0x34037e.isPending;
          },
          get children() {
            return [$s(), (() => {
              const _0x3dca4b = ms();
              _0x1a6512(_0x3dca4b, () => _0x34037e.id === "admin" ? "Admin" : _0x34037e.employee.role.name ?? "Owner");
              return _0x3dca4b;
            })()];
          }
        })];
      }
    }));
    _0x3dcaad(_0xdbf7b5 => {
      const _0x3d6e9b = te.business;
      const _0x851c9d = {
        [te.pending]: _0x34037e.isPending,
        [te.management]: _0x34037e.isManagement
      };
      if (_0x3d6e9b !== _0xdbf7b5._v$) {
        _0x111484(_0x33d1f5, _0xdbf7b5._v$ = _0x3d6e9b);
      }
      _0xdbf7b5._v$2 = _0x3aa50d(_0x33d1f5, _0x851c9d, _0xdbf7b5._v$2);
      return _0xdbf7b5;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    return _0x33d1f5;
  })();
};
const bs = () => {
  const {
    ownBusinesses: _0x3e7088,
    hiredBusinesses: _0x32f27c,
    setPage: _0x314546,
    isDOJ: _0x47aa06,
    isMayor: _0x134bce
  } = R();
  return (() => {
    const _0x19995e = gs();
    const _0x2347f7 = _0x19995e.firstChild;
    const _0xe5e1cf = _0x2347f7.firstChild;
    const _0x4ef223 = _0xe5e1cf.nextSibling;
    const _0x35da14 = _0x4ef223.firstChild;
    const _0x1e7667 = _0x2347f7.nextSibling;
    _0x4ef223.$$click = () => {
      _0x314546("form");
    };
    _0x1a6512(_0x1e7667, _0xf418b(_0x47d980, {
      get when() {
        return _0x47aa06() || _0x134bce();
      },
      get children() {
        return _0xf418b(ye, _0x5243ca({
          id: "admin",
          name: "Management"
        }, {
          isManagement: true
        }));
      }
    }), null);
    _0x1a6512(_0x1e7667, _0xf418b(_0x2d60a2, {
      get each() {
        return _0x32f27c();
      },
      children: _0x2e0d76 => _0xf418b(ye, _0x2e0d76)
    }), null);
    _0x1a6512(_0x1e7667, _0xf418b(_0x2d60a2, {
      get each() {
        return _0x3e7088()?.pending;
      },
      children: _0x4f6f5b => _0xf418b(ye, _0x5243ca(_0x4f6f5b, {
        isPending: true
      }))
    }), null);
    _0x3dcaad(_0x355167 => {
      const _0x59696f = te.container;
      const _0x229ad5 = te.header;
      const _0x4dc8ba = te.newRequest;
      const _0x399a8a = te.box;
      if (_0x59696f !== _0x355167._v$3) {
        _0x111484(_0x19995e, _0x355167._v$3 = _0x59696f);
      }
      if (_0x229ad5 !== _0x355167._v$4) {
        _0x111484(_0x2347f7, _0x355167._v$4 = _0x229ad5);
      }
      if (_0x4dc8ba !== _0x355167._v$5) {
        _0x111484(_0x4ef223, _0x355167._v$5 = _0x4dc8ba);
      }
      if (_0x399a8a !== _0x355167._v$6) {
        _0x111484(_0x35da14, _0x355167._v$6 = _0x399a8a);
      }
      return _0x355167;
    }, {
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined
    });
    return _0x19995e;
  })();
};
_0x68661b(["click"]);
const ys = "_container_16wsu_1";
const xs = "_error_16wsu_35";
const ws = "_confirm_16wsu_47";
const xe = {
  container: ys,
  error: xs,
  confirm: ws
};
const ps = _0x5f5d63("<div>");
const Cs = _0x5f5d63("<div><h1>Submit a Request</h1><p>Fill out the form below to submit a request for a new business.</p><div>Confirm");
const ks = () => {
  const {
    setPage: _0x3dc7df,
    refetchOwnBusinesses: _0x37d956
  } = R();
  const [_0x36e162, _0x2c9902] = _0x315e66({});
  const [_0x5ae588, _0x2a0185] = _0x8488b5(null);
  let _0x3ec562 = null;
  const _0x1537b6 = _0x6b0de5 => {
    const _0x581879 = _0x5ae588();
    const _0x337379 = _0x581879 ? _0x581879 + ", " + _0x6b0de5 : "Required: " + _0x6b0de5;
    _0x2a0185(_0x337379);
    clearTimeout(_0x3ec562);
    _0x3ec562 = setTimeout(() => {
      _0x2a0185(null);
    }, 1500);
  };
  const _0x3e8406 = async () => {
    try {
      if (!(await _0x43970e.execute("business:submitBusinessRequest", _0x36e162))) {
        _0x309ae3("business", "Failed to submit request");
        return;
      }
      _0x309ae3("business", "Request submitted successfully");
      _0x37d956();
    } finally {
      _0x3dc7df("overview");
    }
  };
  return _0xf418b(_0x5c177f, {
    get fallback() {
      return _0xf418b(He, {});
    },
    get children() {
      const _0x10266b = Cs();
      const _0x3007fb = _0x10266b.firstChild;
      const _0x350a08 = _0x3007fb.nextSibling;
      const _0x3a5ac5 = _0x350a08.nextSibling;
      _0x1a6512(_0x10266b, _0xf418b(W, {
        text: "Name",
        onInput: _0x248c54 => _0x2c9902("name", _0x248c54)
      }), _0x3a5ac5);
      _0x1a6512(_0x10266b, _0xf418b(W, {
        text: "Logo (URL)",
        onInput: _0x136a08 => _0x2c9902("logo", _0x136a08)
      }), _0x3a5ac5);
      _0x1a6512(_0x10266b, _0xf418b(W, {
        text: "Location Image (URL)",
        onInput: _0x2ba53d => _0x2c9902("image", _0x2ba53d)
      }), _0x3a5ac5);
      _0x1a6512(_0x10266b, _0xf418b(W, {
        text: "Description (Include Address)",
        textarea: true,
        onInput: _0x151650 => _0x2c9902("description", _0x151650)
      }), _0x3a5ac5);
      _0x1a6512(_0x10266b, _0xf418b(we, {
        isActive: _0x12a81a => _0x36e162.type === _0x12a81a,
        onClick: _0x3ad0c0 => _0x2c9902("type", _0x3ad0c0)
      }), _0x3a5ac5);
      _0x3a5ac5.$$click = () => {
        _0x2a0185(null);
        let _0x2e4eee = false;
        if (!_0x36e162.name) {
          _0x1537b6("Name");
          _0x2e4eee = true;
        }
        if (!_0x36e162.image) {
          _0x1537b6("Image");
          _0x2e4eee = true;
        }
        if (!_0x36e162.description) {
          _0x1537b6("Description");
          _0x2e4eee = true;
        }
        if (!_0x36e162.type) {
          _0x1537b6("Type");
          _0x2e4eee = true;
        }
        if (!_0x2e4eee) {
          _0x3e8406();
        }
      };
      _0x1a6512(_0x10266b, _0xf418b(_0x47d980, {
        get when() {
          return _0x5ae588();
        },
        get children() {
          const _0x1da4be = ps();
          _0x1a6512(_0x1da4be, _0x5ae588);
          _0x3dcaad(() => _0x111484(_0x1da4be, xe.error));
          return _0x1da4be;
        }
      }), null);
      _0x3dcaad(_0xc0ecf8 => {
        const _0x7fcc5 = xe.container;
        const _0x512456 = xe.confirm;
        if (_0x7fcc5 !== _0xc0ecf8._v$) {
          _0x111484(_0x10266b, _0xc0ecf8._v$ = _0x7fcc5);
        }
        if (_0x512456 !== _0xc0ecf8._v$2) {
          _0x111484(_0x3a5ac5, _0xc0ecf8._v$2 = _0x512456);
        }
        return _0xc0ecf8;
      }, {
        _v$: undefined,
        _v$2: undefined
      });
      return _0x10266b;
    }
  });
};
_0x68661b(["click"]);
const Bs = "_container_1xkbt_1";
const As = "_invite_1xkbt_10";
const Oe = {
  container: Bs,
  invite: As
};
const Ss = _0x5f5d63("<div>Invite");
const Rs = _0x5f5d63("<div><div class=\"mb-[2vh] flex h-full w-full flex-col items-start justify-start gap-[0.5vh] overflow-auto pr-[1vh]\">");
const js = () => {
  const {
    setInput: _0x3ed5a8,
    businessEmployees: _0x367db5,
    currentBusinessId: _0x235b2a,
    hasPermission: _0x6ea390,
    businessRoles: _0x39c992,
    setCurrentBusiness: _0x544a77,
    refetchHiredBusinesses: _0x2adbf9,
    currentBusinessData: _0x3864e7
  } = R();
  const _0x112a1a = async _0x3eb306 => {
    _0x3ed5a8(() => ({
      title: "Send mail",
      description: "Send a mail to the employee",
      inputs: {
        subject: {
          type: "text",
          placeholder: "Subject"
        },
        message: {
          type: "text",
          placeholder: "Message"
        }
      },
      onConfirm: async _0x26c697 => {
        const _0x10aa50 = _0x26c697.subject;
        const _0x5523d3 = _0x26c697.message;
        if (!_0x10aa50 || !_0x5523d3) {
          _0x309ae3("business", "Please enter a subject and message");
          return;
        }
        if (!(await _0x43970e.execute("business:sendEmail", _0x235b2a(), _0x3eb306.character_id, _0x10aa50, _0x5523d3))) {
          _0x309ae3("business", "Failed to send mail");
          return;
        }
        _0x309ae3("business", "Mail sent successfully");
      }
    }));
  };
  const _0x17e818 = async _0x1291e8 => {
    _0x3ed5a8(() => ({
      title: "Pay Employee",
      description: "Pay an employee",
      inputs: {
        amount: {
          type: "number",
          placeholder: "Amount"
        },
        comment: {
          type: "text",
          placeholder: "Comment"
        }
      },
      onConfirm: async _0xc1d95d => {
        const _0x8e1e5a = +_0xc1d95d.amount;
        if (!_0x8e1e5a || isNaN(_0x8e1e5a)) {
          return _0x309ae3("business", "Please enter an amount");
        }
        if (!_0xc1d95d.comment) {
          return _0x309ae3("business", "Please enter a comment");
        }
        if (!(await _0x43970e.execute("business:payEmployee", _0x235b2a(), _0x1291e8.character_id, _0x8e1e5a, _0xc1d95d.comment))) {
          return _0x309ae3("business", "Failed to pay employee");
        }
        _0x309ae3("business", "Employee paid successfully");
      }
    }));
  };
  const _0x3cbb8c = async _0x477901 => {
    _0x3ed5a8(() => ({
      title: "Quit",
      description: "Are you sure you want to quit?",
      inputs: {},
      onConfirm: async () => {
        if (!(await _0x43970e.execute("business:quitEmployee", _0x235b2a(), _0x477901.character_id))) {
          return _0x309ae3("business", "Failed to quit");
        }
        _0x309ae3("business", "Quit successfully");
        _0x544a77(null);
        _0x2adbf9();
      }
    }));
  };
  return (() => {
    const _0x2546c2 = Rs();
    const _0x34f6e0 = _0x2546c2.firstChild;
    _0x1a6512(_0x2546c2, _0xf418b(ve, {
      children: "Employees"
    }), _0x34f6e0);
    _0x1a6512(_0x2546c2, _0xf418b(se, {
      title: "Employees",
      get children() {
        return _0xf418b(_0x47d980, {
          get when() {
            return _0x6ea390("hire");
          },
          get children() {
            const _0x111a36 = Ss();
            _0x111a36.$$click = () => {
              _0x3ed5a8(() => ({
                title: "Invite Employee",
                description: "Invite an employee to your business",
                inputs: {
                  cid: {
                    type: "text",
                    placeholder: "State ID"
                  }
                },
                onConfirm: async _0x12e126 => {
                  const _0x545f85 = _0x12e126.cid;
                  if (!_0x545f85) {
                    return _0x309ae3("business", "Please enter a state ID");
                  }
                  _0x309ae3("business", "Inviting employee... (10s)");
                  const [_0x581850, _0x19dce6] = await _0x43970e.execute("business:inviteEmployee", _0x235b2a(), +_0x545f85);
                  if (!_0x581850) {
                    return _0x309ae3("business", _0x19dce6);
                  }
                  _0x309ae3("business", _0x19dce6);
                }
              }));
            };
            _0x3dcaad(() => _0x111484(_0x111a36, Oe.invite));
            return _0x111a36;
          }
        });
      }
    }), _0x34f6e0);
    _0x1a6512(_0x34f6e0, _0xf418b(_0x2d60a2, {
      get each() {
        return _0x367db5();
      },
      children: _0x141d25 => _0xf418b(Ve, _0x5243ca(_0x141d25, {
        get buttons() {
          return [{
            label: "Send mail",
            icon: "fas fa-envelope",
            onClick: async () => {
              await _0x112a1a(_0x141d25);
            },
            enabled: _0x6ea390("email_employees")
          }, {
            label: "Pay Employee",
            icon: "fas fa-envelope-open-dollar",
            onClick: async () => {
              await _0x17e818(_0x141d25);
            },
            enabled: _0x6ea390("pay_employee")
          }, {
            label: "Quit",
            icon: "fas fa-sign-out-alt",
            onClick: async () => {
              await _0x3cbb8c(_0x141d25);
            },
            enabled: () => _0x39c992()?.find(_0x17e0b7 => _0x17e0b7.id === _0x141d25.role_id)?.name !== "Owner" && _0x141d25.character_id === _0x6b1c19()?.cid
          }];
        }
      }))
    }));
    _0x3dcaad(() => _0x111484(_0x2546c2, Oe.container));
    return _0x2546c2;
  })();
};
_0x68661b(["click"]);
const Es = "_container_ung41_1";
const Is = {
  container: Es
};
const Ps = _0x5f5d63("<div><div class=\"flex w-full flex-row items-center justify-start gap-[1vh]\"><i></i><div class=\"flex flex-col items-start justify-start\"><h1></h1><h2>");
const Le = _0x38da1c => (() => {
  const _0x41f84a = Ps();
  const _0x54f05b = _0x41f84a.firstChild;
  const _0x11db0d = _0x54f05b.firstChild;
  const _0x2e5173 = _0x11db0d.nextSibling;
  const _0x3b8d8e = _0x2e5173.firstChild;
  const _0x456f67 = _0x3b8d8e.nextSibling;
  _0x28abb2(_0x41f84a, "click", _0x38da1c.action, true);
  _0x1a6512(_0x3b8d8e, () => _0x38da1c.title);
  _0x1a6512(_0x456f67, () => _0x38da1c.text);
  _0x3dcaad(_0x9307c4 => {
    const _0x304f10 = Is.container;
    const _0x4434d6 = _0x38da1c.icon;
    if (_0x304f10 !== _0x9307c4._v$) {
      _0x111484(_0x41f84a, _0x9307c4._v$ = _0x304f10);
    }
    if (_0x4434d6 !== _0x9307c4._v$2) {
      _0x111484(_0x11db0d, _0x9307c4._v$2 = _0x4434d6);
    }
    return _0x9307c4;
  }, {
    _v$: undefined,
    _v$2: undefined
  });
  return _0x41f84a;
})();
_0x68661b(["click"]);
const qs = _0x5f5d63("<div class=\"flex h-full w-full flex-col items-start justify-start gap-[1vh] py-[2vh] pr-[5vh]\"><div class=\"grid grid-cols-3 gap-[1vh] w-full items-start justify-between\"></div><div class=\"flex w-full flex-row items-center justify-between\">");
const Ts = () => {
  const {
    businessEmployees: _0x274f51,
    businessRoles: _0x57c1e7,
    currentBusinessData: _0x7f7a19,
    hasPermission: _0x4875c1,
    setInput: _0x4eb025,
    currentBusinessId: _0x46d01c,
    businessBalance: _0x32e6df
  } = R();
  const _0x60fce9 = _0x4482d9(() => _0x274f51()?.length ?? 0);
  const _0x51c888 = _0x4482d9(() => _0x57c1e7()?.length ?? 0);
  const _0x4f1777 = _0x4482d9(() => _0x7f7a19()?.employee.role.name ?? "Owner");
  const _0x5e0f85 = () => {
    _0x4eb025(() => ({
      title: "Pay External",
      description: "Pay someone from outside the business",
      inputs: {
        amount: {
          type: "number",
          placeholder: "Amount"
        },
        type: {
          type: "select",
          placeholder: "Type",
          options: [{
            label: "State ID",
            value: "character"
          }, {
            label: "Account ID",
            value: "account"
          }]
        },
        targetId: {
          type: "number",
          placeholder: "Receiver"
        },
        comment: {
          type: "text",
          placeholder: "Comment"
        }
      },
      onConfirm: async _0x59875c => {
        const _0x57722e = +_0x59875c.amount;
        if (!_0x57722e || isNaN(_0x57722e)) {
          return _0x309ae3("business", "Please enter an amount");
        }
        if (!_0x59875c.type) {
          return _0x309ae3("business", "Please enter a type");
        }
        if (!_0x59875c.targetId) {
          return _0x309ae3("business", "Please enter a target ID");
        }
        if (!_0x59875c.comment) {
          return _0x309ae3("business", "Please enter a comment");
        }
        if (!(await _0x43970e.execute("business:payExternal", _0x46d01c(), _0x59875c.type, _0x59875c.targetId, _0x57722e, _0x59875c.comment))) {
          return _0x309ae3("business", "Failed to pay external");
        }
        _0x309ae3("business", "External paid successfully");
      }
    }));
  };
  const _0x1cebcb = () => {
    _0x4eb025(() => ({
      title: "Charge External",
      description: "Charge someone from outside the business",
      inputs: {
        stateId: {
          type: "number",
          placeholder: "State ID"
        },
        amount: {
          type: "number",
          placeholder: "Amount"
        },
        comment: {
          type: "text",
          placeholder: "Comment"
        }
      },
      onConfirm: async _0x52003b => {
        const _0x25bfe3 = +_0x52003b.amount;
        if (!_0x25bfe3 || isNaN(_0x25bfe3)) {
          return _0x309ae3("business", "Please enter an amount");
        }
        if (!_0x52003b.stateId) {
          return _0x309ae3("business", "Please enter a state ID");
        }
        if (!_0x52003b.comment) {
          return _0x309ae3("business", "Please enter a comment");
        }
        if (!(await _0x43970e.execute("business:chargeExternal", _0x46d01c(), _0x52003b.stateId, _0x25bfe3, _0x52003b.comment))) {
          return _0x309ae3("business", "Failed to charge external");
        }
      }
    }));
  };
  return (() => {
    const _0x19603d = qs();
    const _0x51edc6 = _0x19603d.firstChild;
    _0x1a6512(_0x51edc6, _0xf418b(ee, {
      title: "Amount",
      text: "of Employees",
      icon: "fa-solid fa-users",
      bottomTitle: "Total",
      get bottomText() {
        return _0x60fce9();
      }
    }), null);
    _0x1a6512(_0x51edc6, _0xf418b(ee, {
      title: "Amount",
      text: "of Roles",
      icon: "fa-solid fa-code-branch",
      bottomTitle: "Total",
      get bottomText() {
        return _0x51c888();
      }
    }), null);
    _0x1a6512(_0x51edc6, _0xf418b(ee, {
      title: "What's your",
      text: "Role",
      icon: "fa-solid fa-user",
      bottomTitle: "Role",
      get bottomText() {
        return _0x4f1777();
      }
    }), null);
    _0x1a6512(_0x51edc6, _0xf418b(_0x47d980, {
      get when() {
        return _0x4875c1("pay_external");
      },
      get children() {
        return _0xf418b(Le, {
          title: "Pay External",
          text: "Pay external",
          icon: "fa-solid fa-money-bill",
          action: () => _0x5e0f85()
        });
      }
    }), null);
    _0x1a6512(_0x51edc6, _0xf418b(_0x47d980, {
      get when() {
        return _0x4875c1("charge_external");
      },
      get children() {
        return _0xf418b(Le, {
          title: "Charge External",
          text: "Charge external",
          icon: "fa-solid fa-money-bill",
          action: () => _0x1cebcb()
        });
      }
    }), null);
    _0x1a6512(_0x51edc6, _0xf418b(_0x47d980, {
      get when() {
        return _0x4875c1("bank_access");
      },
      get children() {
        return _0xf418b(ee, {
          title: "Business Bank Account",
          text: "Balance",
          icon: "fa-solid fa-money-bill",
          bottomTitle: "Total",
          get bottomText() {
            return new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD"
            }).format(_0x32e6df());
          }
        });
      }
    }), null);
    return _0x19603d;
  })();
};
const Os = "_container_1xkbt_1";
const Ls = "_invite_1xkbt_10";
const De = {
  container: Os,
  invite: Ls
};
const Ds = _0x5f5d63("<div>Create");
const Ns = _0x5f5d63("<div><div class=\"mb-[2vh] flex h-full w-full flex-col items-start justify-start gap-[0.5vh] overflow-auto pr-[1vh]\">");
const Fs = () => {
  const {
    setInput: _0x141d2e,
    currentBusinessId: _0x54cb31,
    businessRoles: _0x383066,
    refetchBusinessRoles: _0x362002,
    hasPermission: _0x19cee9
  } = R();
  const _0xe0f13 = async () => {
    _0x141d2e(() => ({
      title: "Create Role",
      description: "Create a new role for your business",
      inputs: {
        name: {
          type: "text",
          placeholder: "Role Name"
        }
      },
      onConfirm: async _0x3ef360 => {
        const _0x348790 = _0x3ef360.name;
        if (!_0x348790) {
          return _0x309ae3("business", "Please enter a name");
        }
        if (!(await _0x43970e.execute("business:createRole", _0x54cb31(), {
          name: _0x348790
        }))) {
          return _0x309ae3("business", "Failed to create role");
        }
        _0x309ae3("business", "Role created successfully");
        _0x362002();
      }
    }));
  };
  const _0x32d24d = async _0x4f2e7c => {
    const _0x3e52b = await _0x43970e.execute("business:getRolePermissions", _0x4f2e7c.id);
    _0x141d2e(() => ({
      title: "Set Permissions",
      description: "Adjusts permissions for this role",
      inputs: Ue.reduce((_0xcb5ab1, _0x50b087) => {
        const _0x31281f = _0x3e52b.includes(_0x50b087.id);
        _0xcb5ab1[_0x50b087.id] = {
          type: "checkbox",
          placeholder: _0x50b087.label,
          _defaultValue: _0x31281f
        };
        return _0xcb5ab1;
      }, {}),
      onConfirm: async _0x181d24 => {
        const [_0x249cb0, _0x5c4537] = await _0x43970e.execute("business:setRolePermissions", _0x54cb31(), _0x4f2e7c.id, _0x181d24);
        _0x309ae3("business", _0x5c4537);
      }
    }));
  };
  return (() => {
    const _0x5a7673 = Ns();
    const _0x17e7a4 = _0x5a7673.firstChild;
    _0x1a6512(_0x5a7673, _0xf418b(ve, {
      children: "Ranks"
    }), _0x17e7a4);
    _0x1a6512(_0x5a7673, _0xf418b(se, {
      title: "Ranks",
      get children() {
        return _0xf418b(_0x47d980, {
          get when() {
            return _0x19cee9("change_role");
          },
          get children() {
            const _0x27a170 = Ds();
            _0x27a170.$$click = () => {
              _0xe0f13();
            };
            _0x3dcaad(() => _0x111484(_0x27a170, De.invite));
            return _0x27a170;
          }
        });
      }
    }), _0x17e7a4);
    _0x1a6512(_0x17e7a4, _0xf418b(_0x2d60a2, {
      get each() {
        return _0x383066();
      },
      children: _0x3a30a2 => _0xf418b(Qe, _0x5243ca(_0x3a30a2, {
        get name() {
          return _0x3a30a2.name;
        },
        get buttons() {
          return [{
            label: "Change Permissions",
            icon: "fa-solid fa-pen-to-square",
            onClick: () => _0x32d24d(_0x3a30a2),
            enabled: _0x3a30a2.name !== "Owner" && _0x19cee9("change_role")
          }];
        }
      }))
    }));
    _0x3dcaad(() => _0x111484(_0x5a7673, De.container));
    return _0x5a7673;
  })();
};
_0x68661b(["click"]);
const Ms = () => {
  const {
    page: _0x209bcc,
    setPage: _0x2e1abb,
    currentBusinessId: _0x256806,
    refetchBusinessEmployees: _0x1c6757,
    refetchBusinessRoles: _0xfff5b0,
    setCurrentAdminBusinessId: _0x472621
  } = R();
  _0x4faf69(() => {
    _0x2e1abb("overview");
    _0x1c6757();
    _0xfff5b0();
  });
  const _0xdb37c0 = {
    overview: {
      render: () => _0xf418b(Ts, {})
    },
    employees: {
      render: () => _0xf418b(js, {})
    },
    ranks: {
      render: () => _0xf418b(Fs, {})
    }
  };
  return _0xf418b(_0x253663, {
    get children() {
      return _0xf418b(_0x16436b, {
        get when() {
          return _0x256806() !== null;
        },
        get children() {
          return [_0xf418b(Je, {
            get children() {
              return [_0xf418b(ne, {
                label: "Overview",
                page: "overview",
                icon: "fa-light fa-chart-mixed"
              }), _0xf418b(ne, {
                label: "Employees",
                page: "employees",
                icon: "fa-light fa-users"
              }), _0xf418b(ne, {
                label: "Ranks",
                page: "ranks",
                icon: "fa-light fa-code-branch"
              })];
            }
          }), _0xf418b(_0x3204c2, {
            name: "page-swap",
            mode: "outin",
            get children() {
              return _0xdb37c0[_0x209bcc()]?.render();
            }
          })];
        }
      });
    }
  });
};
const Us = "_container_vuugj_1";
const Js = {
  container: Us
};
const Vs = _0x5f5d63("<div>");
const Qs = () => {
  const {
    page: _0x5eb1ce,
    input: _0x478e8a,
    currentBusinessId: _0x334272
  } = R();
  return _0xf418b(_0x5c177f, {
    get fallback() {
      return _0xf418b(He, {});
    },
    get children() {
      const _0x434da5 = Vs();
      _0x1a6512(_0x434da5, _0xf418b(_0x253663, {
        get children() {
          return [_0xf418b(_0x16436b, {
            get when() {
              return _0x5eb1ce() === "form";
            },
            get children() {
              return _0xf418b(ks, {});
            }
          }), _0xf418b(_0x16436b, {
            get when() {
              return _0x334272() === null;
            },
            get children() {
              return _0xf418b(bs, {});
            }
          }), _0xf418b(_0x16436b, {
            get when() {
              return _0x334272() === "admin";
            },
            get children() {
              return _0xf418b(An, {});
            }
          }), _0xf418b(_0x16436b, {
            get when() {
              return _0x334272() !== "admin";
            },
            get children() {
              return _0xf418b(Ms, {});
            }
          })];
        }
      }), null);
      _0x1a6512(_0x434da5, _0xf418b(_0x3204c2, {
        name: "scaleIn",
        get children() {
          return _0xf418b(_0x47d980, {
            get when() {
              return _0x478e8a();
            },
            get children() {
              return _0xf418b(ss, {});
            }
          });
        }
      }), null);
      _0x3dcaad(() => _0x111484(_0x434da5, Js.container));
      return _0x434da5;
    }
  });
};
const Hs = () => _0xf418b(_0x14566c, {
  get name() {
    return Gs.name;
  },
  headerColor: "#0B0B15",
  get children() {
    return _0xf418b(tt, {
      get children() {
        return _0xf418b(Qs, {});
      }
    });
  }
});
const Ws = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAsCAYAAAAacYo8AAAAAXNSR0IArs4c6QAAAaVJREFUaAXtWdFxwjAM9Qhs0IzACB2BEToCG8AGjNAROkJHyWevJD6N8Hpy6kb2hSsQyfkRdz4ngKWXl2f5JQ4hhIABZ0QQRmBVG3DmeEsflRwRPcdJ8VPAtYDl+IhLDVw9x4BjWMWwBCyPCbsMHoSdQQ6yAv4igHcGwOHAC1YJznhBiJhHLpWCGZfK7QXRpbKFVPoiqZi5T37f58WHexCMFqABr08CXDZk3zg0AZ5Y+UKHAReMeP+nfWDEp2jz/3n8FXsJ2pTxOpH2uZlUtIHW8Rx4VTQSQYmVeJfGZ03X84HHE7pmjGPEQeWxbWakTVUBP8fNSZdL3GO/k2TdTOPKoKcLd5O1ocli2WBUePVRyrU3d4e/wN9UJcm2QjVgZkVoPE9U3G8rbpdcLsHZVrQCni9ArXfgWSbcL0hFjekcqBXjIOyhaStaAE+2Qt6RdceUJmgT4Nq2IsK+jrtXqeRlvgA54854xUBRncQC5FKpiPLJuYVU1m/MVreRtwj/vJDNdiECIk4FWzWIR8+XNmgnc6XxBmGKEXFKxCiBJ46Tma577Rw/fred0PO8mU0AAAAOZVhJZk1NACoAAAAIAAAAAAAAANJTkwAAAABJRU5ErkJggg==";
const Gs = {
  icon: Ws,
  enabled: true,
  onDock: false,
  name: "business",
  label: "Business",
  render: () => _0xf418b(Hs, {})
};
export { Gs as default };
