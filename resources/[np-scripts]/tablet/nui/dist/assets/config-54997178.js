import { t as _0x2d54c2, ag as _0x1a0448, c as _0x2807d1, a as _0x30acab, x as _0x3e0a9d, f as _0x281ef6, e as _0x25414f, j as _0x2a81ef, S as _0x2570c4, m as _0x37fd54, J as _0x5aa80d, l as _0x55969d } from "./vendor-c69496a3.js";
import { A as _0x17421d } from "./index-3eb10154.js";
import { T as _0x49f1e6 } from "./index-8a6e8499.js";
import { N as _0x1c58c0 } from "./v-packages-3113361c.js";
import "./commonjsHelpers-725317a4.js";
import "./vite-1e207deb.js";
const q = _0x2d54c2("<div class=\"contacts-header\"><div class=\"icon\"></div><div class=\"flex flex-col items-start justify-center\"><div class=\"small\">Your</div><div class=\"big\">Contacts</div></div><div class=\"description\">Contacts are people you can interact and work for to earn money, reputation and more.");
function O() {
  return q();
}
const [Q, W] = _0x1a0448(() => {
  const [_0x3e4e18, _0x6157b] = _0x2807d1([]);
  const [_0x22f6ae, _0x4ac8ae] = _0x30acab("");
  return {
    contacts: _0x3e4e18,
    setContacts: _0x6157b,
    search: _0x22f6ae,
    setSearch: _0x4ac8ae
  };
});
const V = () => W();
const X = _0x2d54c2("<div class=\"flex w-full flex-row items-center justify-between\"><div class=\"reputation\"><div class=\"flex w-full flex-col items-start justify-start\"><div class=\"title\">Most Contact Reputation</div><div class=\"description\"></div></div><div class=\"flex w-full flex-col items-start justify-start\"><div class=\"rep-title\"><span>Reputation</span> <span>/</div><div class=\"rep-bar-container\"><div class=\"bar\"><div class=\"bar-progress\"></div></div></div></div></div><div class=\"reputation total\"><div class=\"flex w-full flex-col items-start justify-start\"><div class=\"title\">Total Reputation</div><div class=\"description\">A total reputation assessment of an individual or organization that takes into account their interactions, associations, and feedback from a wide range of contacts and stakeholders. This comprehensive evaluation provides insights into their standing, credibility, and trustworthiness within their network and the broader community, reflecting the cumulative impact of their actions and relationships.</div></div><div class=\"flex w-full flex-col items-start justify-start\"><div class=\"rep-title\"><span>Reputation</span> <span>/</div><div class=\"rep-bar-container\"><div class=\"bar\"><div class=\"bar-progress\">");
function Z() {
  const {
    contacts: _0x29b1fd
  } = V();
  const _0x2c27fe = _0x3e0a9d(() => _0x29b1fd?.filter(_0x244251 => _0x244251.visible && !_0x244251.hideProgression).reduce((_0x14c1c7, _0x51f0ca) => _0x14c1c7.progression > _0x51f0ca.progression ? _0x14c1c7 : _0x51f0ca, {}));
  const _0x4cb486 = _0x3e0a9d(() => {
    let _0x6c753d = 0;
    _0x29b1fd?.forEach(_0x493c10 => {
      _0x6c753d += _0x493c10.progression;
    });
    return _0x6c753d;
  });
  const _0xe58d97 = (_0x4b7e0b, _0x28b328) => !_0x4b7e0b || !_0x28b328 ? 0 .toFixed(2) : (_0x4b7e0b = _0x4b7e0b > _0x28b328 ? _0x28b328 : _0x4b7e0b, (_0x4b7e0b / _0x28b328 * 100).toFixed(2));
  return _0x281ef6(_0x2570c4, {
    get when() {
      return _0x29b1fd.length > 0;
    },
    get children() {
      const _0x406c43 = X();
      const _0x1529f7 = _0x406c43.firstChild;
      const _0x137c2c = _0x1529f7.firstChild;
      const _0x54c239 = _0x137c2c.firstChild;
      const _0x167483 = _0x54c239.nextSibling;
      const _0x504448 = _0x137c2c.nextSibling;
      const _0x1cef2e = _0x504448.firstChild;
      const _0x574256 = _0x1cef2e.firstChild;
      const _0x58e034 = _0x574256.nextSibling;
      const _0x583410 = _0x58e034.nextSibling;
      const _0x3e2def = _0x583410.firstChild;
      const _0x102899 = _0x1cef2e.nextSibling;
      const _0x3e2ad1 = _0x102899.firstChild;
      const _0x5c425c = _0x3e2ad1.firstChild;
      const _0x3d0ed5 = _0x1529f7.nextSibling;
      const _0x129af7 = _0x3d0ed5.firstChild;
      const _0x5395bc = _0x129af7.nextSibling;
      const _0x19906b = _0x5395bc.firstChild;
      const _0x585f6c = _0x19906b.firstChild;
      const _0x5eab45 = _0x585f6c.nextSibling;
      const _0x5ad6ab = _0x5eab45.nextSibling;
      const _0x3c9c03 = _0x5ad6ab.firstChild;
      const _0xa1a9e1 = _0x19906b.nextSibling;
      const _0x1dc0a2 = _0xa1a9e1.firstChild;
      const _0x20234c = _0x1dc0a2.firstChild;
      _0x25414f(_0x167483, () => _0x2c27fe().name);
      _0x25414f(_0x583410, () => _0x2c27fe().progression?.toFixed(2), _0x3e2def);
      _0x25414f(_0x583410, () => _0x2c27fe().maxProgression, null);
      _0x25414f(_0x5ad6ab, () => _0x4cb486().toFixed(2), _0x3c9c03);
      _0x25414f(_0x5ad6ab, () => _0x29b1fd.length * 100, null);
      _0x2a81ef(_0x45e0c3 => {
        const _0x3a8120 = _0xe58d97(_0x2c27fe().progression, _0x2c27fe().maxProgression) + "%";
        const _0x250ab6 = _0x4cb486() / (_0x29b1fd.length * 100) * 100 + "%";
        if (_0x3a8120 !== _0x45e0c3._v$) {
          if ((_0x45e0c3._v$ = _0x3a8120) != null) {
            _0x5c425c.style.setProperty("width", _0x3a8120);
          } else {
            _0x5c425c.style.removeProperty("width");
          }
        }
        if (_0x250ab6 !== _0x45e0c3._v$2) {
          if ((_0x45e0c3._v$2 = _0x250ab6) != null) {
            _0x20234c.style.setProperty("width", _0x250ab6);
          } else {
            _0x20234c.style.removeProperty("width");
          }
        }
        return _0x45e0c3;
      }, {
        _v$: undefined,
        _v$2: undefined
      });
      return _0x406c43;
    }
  });
}
const ee = _0x2d54c2("<div class=\"avatar\">");
const te = _0x2d54c2("<div class=\"tag\">");
const se = _0x2d54c2("<div class=\"rep-bar-container\"><div class=\"bar\"><div class=\"bar-progress\"></div></div><div class=\"rep\">");
const ie = _0x2d54c2("<div class=\"markButton\">Set mark");
const le = _0x2d54c2("<div class=\"contacts-list-header\"><div class=\"flex w-full flex-row items-center justify-start gap-3\"><div class=\"icon\"></div><div class=\"flex flex-col items-start justify-center\"><div class=\"small\">List of</div><div class=\"big\">Contacts</div></div><div class=\"searchBar\"><input type=\"text\" placeholder=\"Search...\"><div class=\"searchIcon\">");
const ne = _0x2d54c2("<div class=\"contacts-list\">");
function ae() {
  const {
    setContacts: _0x5bcf0f,
    search: _0x21fc9f,
    setSearch: _0x1c34fb
  } = V();
  _0x5aa80d(async () => {
    const _0xaff145 = await _0x1c58c0.execute("tablet:contacts:getContacts");
    _0x5bcf0f(_0xaff145);
    _0x2eb388(_0xaff145.filter(_0x51237e => _0x51237e.visible && !_0x51237e.hideProgression).map(_0x27cb62 => {
      const {
        id: _0x37ff8a,
        name: _0x36902a,
        group: _0x4b7726,
        progression: _0x1afdd8,
        npc: _0xe9ebc9,
        maxProgression: _0x2abdfb
      } = _0x27cb62;
      const _0x4dc855 = (_0x5480a6, _0x56e220) => !_0x5480a6 || !_0x56e220 ? 0 .toFixed(2) : (_0x5480a6 = _0x5480a6 > _0x56e220 ? _0x56e220 : _0x5480a6, (_0x5480a6 / _0x56e220 * 100).toFixed(2));
      return {
        avatar: (() => {
          const _0x4a9ae1 = ee();
          if ("url(" + ("https://assets.nopixel.net/dev/images/contacts/" + _0x37ff8a + ".webp") + ")" != null) {
            _0x4a9ae1.style.setProperty("background-image", "url(" + ("https://assets.nopixel.net/dev/images/contacts/" + _0x37ff8a + ".webp") + ")");
          } else {
            _0x4a9ae1.style.removeProperty("background-image");
          }
          return _0x4a9ae1;
        })(),
        name: _0x36902a,
        tag: (() => {
          const _0x4deead = te();
          _0x25414f(_0x4deead, _0x4b7726);
          _0x2a81ef(_0x366107 => _0x55969d(_0x4deead, {
            [_0x27cb62.color ?? ""]: true
          }, _0x366107));
          return _0x4deead;
        })(),
        rep: (() => {
          const _0x2568dd = se();
          const _0x1a8e09 = _0x2568dd.firstChild;
          const _0x169051 = _0x1a8e09.firstChild;
          const _0x535edf = _0x1a8e09.nextSibling;
          _0x25414f(_0x535edf, () => Math.round(_0x1afdd8 ?? 0));
          _0x2a81ef(_0x4e3ff0 => {
            const _0x7f1487 = _0x4dc855(_0x1afdd8, _0x2abdfb ?? 100) + "%";
            const _0xa9ed80 = {
              [_0x27cb62.color ?? ""]: true
            };
            const _0x4013a3 = {
              [_0x27cb62.color ?? ""]: true
            };
            if (_0x7f1487 !== _0x4e3ff0._v$) {
              if ((_0x4e3ff0._v$ = _0x7f1487) != null) {
                _0x169051.style.setProperty("width", _0x7f1487);
              } else {
                _0x169051.style.removeProperty("width");
              }
            }
            _0x4e3ff0._v$2 = _0x55969d(_0x169051, _0xa9ed80, _0x4e3ff0._v$2);
            _0x4e3ff0._v$3 = _0x55969d(_0x535edf, _0x4013a3, _0x4e3ff0._v$3);
            return _0x4e3ff0;
          }, {
            _v$: undefined,
            _v$2: undefined,
            _v$3: undefined
          });
          return _0x2568dd;
        })(),
        gps: (() => {
          const _0x1336b3 = ie();
          _0x1336b3.$$click = () => {
            _0x1c58c0.execute("tablet:contacts:setMark", _0x27cb62);
          };
          return _0x1336b3;
        })()
      };
    }));
  });
  const [_0x45c462, _0x2eb388] = _0x2807d1([]);
  const _0x46b331 = [{
    accessorKey: "avatar",
    header: "Avatar",
    cell: _0x81c3fd => _0x81c3fd.getValue()
  }, {
    accessorKey: "name",
    header: "Name"
  }, {
    accessorKey: "tag",
    header: "Tag",
    cell: _0x157b2a => _0x157b2a.getValue()
  }, {
    accessorKey: "rep",
    header: "Rep",
    cell: _0x55f181 => _0x55f181.getValue()
  }, {
    accessorKey: "gps",
    header: "GPS",
    cell: _0x50f895 => _0x50f895.getValue()
  }];
  return [(() => {
    const _0x31d693 = le();
    const _0x58ce50 = _0x31d693.firstChild;
    const _0x47d9c = _0x58ce50.firstChild;
    const _0x503822 = _0x47d9c.nextSibling;
    const _0x46d60b = _0x503822.nextSibling;
    const _0x2f0b75 = _0x46d60b.firstChild;
    _0x2f0b75.$$input = _0x462e68 => {
      _0x1c34fb(_0x462e68.currentTarget.value);
    };
    _0x2a81ef(() => _0x2f0b75.value = _0x21fc9f());
    return _0x31d693;
  })(), (() => {
    const _0x5e2324 = ne();
    _0x25414f(_0x5e2324, _0x281ef6(_0x49f1e6, {
      get rows() {
        return _0x45c462.filter(_0x41c875 => _0x41c875.name.toLowerCase().includes(_0x21fc9f().toLowerCase()));
      },
      columns: _0x46b331
    }));
    return _0x5e2324;
  })()];
}
_0x37fd54(["click", "input"]);
const re = _0x2d54c2("<div class=\"contacts-container\"><div class=\"contacts-content\"><div class=\"contacts-details\">");
const ce = () => _0x281ef6(_0x17421d, {
  get name() {
    return de.name;
  },
  headerColor: "#030A10",
  get children() {
    return _0x281ef6(Q, {
      get children() {
        const _0x3767f4 = re();
        const _0x500cc1 = _0x3767f4.firstChild;
        const _0x244d68 = _0x500cc1.firstChild;
        _0x25414f(_0x3767f4, _0x281ef6(O, {}), _0x500cc1);
        _0x25414f(_0x244d68, _0x281ef6(Z, {}), null);
        _0x25414f(_0x244d68, _0x281ef6(ae, {}), null);
        return _0x3767f4;
      }
    });
  }
});
const oe = "" + new URL("contacts-icon-d58beb8e.png", import.meta.url).href;
const de = {
  icon: oe,
  enabled: true,
  onDock: false,
  name: "contacts",
  label: "Contacts",
  render: () => _0x281ef6(ce, {})
};
export { de as default };
