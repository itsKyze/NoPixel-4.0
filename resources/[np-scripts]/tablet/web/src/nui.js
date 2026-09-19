import { d as _0xefc8ca, s as _0x55fc1e } from "./vite.js";
const p = async (_0x2af08f, _0x306bbf = {}, _0x5a41da) => {
  const _0x186574 = _0xefc8ca();
  const _0x3fda32 = {
    ..._0x186574,
    id: _0x186574?.cid
  };
  const _0x3e51b1 = typeof _0x306bbf == "object" ? {
    character: _0x3fda32,
    ..._0x306bbf
  } : {
    character: _0x3fda32,
    body: _0x306bbf
  };
  if (_0x5a41da?.extApi) {
    const _0x57ea08 = "" + _0x55fc1e.game.endpoint + _0x2af08f;
    const _0x599542 = {
      Authorization: "Bearer " + _0x55fc1e.game.token,
      "Content-Type": "application/json; charset=UTF-8"
    };
    const _0x5b82e7 = await fetch(_0x57ea08, {
      method: "POST",
      headers: _0x599542,
      body: JSON.stringify({
        character: _0x3fda32,
        ..._0x306bbf
      })
    });
    try {
      return await _0x5b82e7.json();
    } catch (_0x411f60) {
      return {
        data: {},
        meta: {
          ok: false,
          message: "failed to do request for: " + _0x2af08f + " - " + (_0x411f60 instanceof Error && _0x411f60.message)
        }
      };
    }
  } else {
    const _0x59bc09 = await fetch("https://np-ui/" + _0x2af08f, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(_0x3e51b1)
    });
    try {
      return await _0x59bc09.json();
    } catch (_0xb8632c) {
      return {
        data: {},
        meta: {
          ok: false,
          message: "failed to do request for: " + _0x2af08f + " - " + (_0xb8632c instanceof Error && _0xb8632c.message)
        }
      };
    }
  }
};
export { p as n };
