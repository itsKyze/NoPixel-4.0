import { c as _0x46e80c, J as _0x2cce78, e as _0x2364f2, j as _0x22eefb, k as _0x598ecc, f as _0xe72260, S as _0x19590b, t as _0x6107c } from "./vendor-c69496a3.js";
import { a as _0x2ce2df } from "./vite-1e207deb.js";
import { T as _0x3f4ce4 } from "./index-dc6786b9.js";
import { N as _0x13199a } from "./v-packages-3113361c.js";
import "./commonjsHelpers-725317a4.js";
const A = "_container_xfoav_1";
const $ = "_amount_xfoav_12";
const w = "_table_xfoav_22";
const c = {
  container: A,
  amount: $,
  table: w
};
const y = _0x6107c("<div>");
const C = _0x6107c("<div><div>");
const x = () => {
  const [_0x2d5a96, _0x4a15c2] = _0x46e80c([]);
  const _0x5db11a = [{
    accessorKey: "username",
    header: "Sender Username",
    cell: _0x52a6a7 => _0x52a6a7.getValue()
  }, {
    accessorKey: "sender_address",
    header: "Sender Address",
    cell: _0x5018fa => _0x5018fa.getValue()
  }, {
    accessorKey: "receiver_address",
    header: "Receiver Address"
  }, {
    accessorKey: "mac",
    header: "MAC Address",
    cell: _0x4e521e => _0x4e521e.getValue()
  }, {
    accessorKey: "amount",
    header: "Amount",
    cell: _0x3006fb => _0x3006fb.getValue()
  }];
  _0x2cce78(async () => {
    const _0xbaf6ab = (await _0x13199a.execute("binunce:getData")).map(_0x5c601f => ({
      username: _0x5c601f.username,
      sender_address: _0x5c601f.sender_address,
      receiver_address: _0x5c601f.receiver_address,
      mac: _0x5c601f.mac,
      amount: (() => {
        const _0x9219df = y();
        _0x2364f2(_0x9219df, () => _0x5c601f.amount);
        _0x22eefb(() => _0x598ecc(_0x9219df, c.amount));
        return _0x9219df;
      })()
    }));
    _0x4a15c2([..._0xbaf6ab]);
  });
  return (() => {
    const _0x589c99 = C();
    const _0x551ef1 = _0x589c99.firstChild;
    _0x2364f2(_0x589c99, _0xe72260(_0x2ce2df, {
      get name() {
        return S.name;
      }
    }), _0x551ef1);
    _0x2364f2(_0x551ef1, _0xe72260(_0x19590b, {
      get when() {
        return _0x2d5a96.length > 0;
      },
      get children() {
        return _0xe72260(_0x3f4ce4, {
          rows: _0x2d5a96,
          columns: _0x5db11a
        });
      }
    }));
    _0x22eefb(_0x39e9dc => {
      const _0x12298b = c.container;
      const _0x2ca5ac = c.table;
      if (_0x12298b !== _0x39e9dc._v$) {
        _0x598ecc(_0x589c99, _0x39e9dc._v$ = _0x12298b);
      }
      if (_0x2ca5ac !== _0x39e9dc._v$2) {
        _0x598ecc(_0x551ef1, _0x39e9dc._v$2 = _0x2ca5ac);
      }
      return _0x39e9dc;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    return _0x589c99;
  })();
};
const K = "" + new URL("binunce-icon-32380033.png", import.meta.url).href;
const S = {
  icon: K,
  enabled: true,
  onDock: false,
  name: "binunce",
  label: "Binunce",
  description: "Public crypto transactions: users, MAC, addresses, amounts.",
  isEnabled: true,
  isLaptop: true,
  requiresWifi: true,
  render: () => _0xe72260(x, {})
};
export { S as default };
