(() => {
  'use strict';

  var varData_1 = {};
  ;
  const varData_2 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  ;
  function handleAction_1(param_1) {
    return typeof param_1 === "string" && varData_2.test(param_1);
  }
  const varData_3 = handleAction_1;
  ;
  var varData_4 = [];
  for (var loopIdx = 0; loopIdx < 256; ++loopIdx) {
    varData_4.push((loopIdx + 256).toString(16).substr(1));
  }
  function createUUID(param_1, _0x12f3ed = 0) {
    var varData_5 = (varData_4[param_1[_0x12f3ed + 0]] + varData_4[param_1[_0x12f3ed + 1]] + varData_4[param_1[_0x12f3ed + 2]] + varData_4[param_1[_0x12f3ed + 3]] + "-" + varData_4[param_1[_0x12f3ed + 4]] + varData_4[param_1[_0x12f3ed + 5]] + "-" + varData_4[param_1[_0x12f3ed + 6]] + varData_4[param_1[_0x12f3ed + 7]] + "-" + varData_4[param_1[_0x12f3ed + 8]] + varData_4[param_1[_0x12f3ed + 9]] + "-" + varData_4[param_1[_0x12f3ed + 10]] + varData_4[param_1[_0x12f3ed + 11]] + varData_4[param_1[_0x12f3ed + 12]] + varData_4[param_1[_0x12f3ed + 13]] + varData_4[param_1[_0x12f3ed + 14]] + varData_4[param_1[_0x12f3ed + 15]]).toLowerCase();
    if (!varData_3(varData_5)) {
      throw TypeError("Stringified UUID is invalid");
    }
    return varData_5;
  }
  const varData_6 = createUUID;
  ;
  const varData_7 = globalThis.NPX;
  const varData_8 = varData_7.Hud;
  const varData_9 = varData_7.Utils;
  const varData_10 = varData_7.Zones;
  const varData_11 = varData_7.Events;
  const varData_12 = varData_7.Streaming;
  const varData_13 = varData_7.Procedures;
  const varData_14 = varData_7.Interface;
  const varData_15 = null && varData_7;
  ;
  const varData_16 = (param_1, param_2) => Math.floor(param_1 / param_2);
  const varData_17 = (param_1, param_2) => Math.floor(param_1 / param_2);
  const varData_18 = (param_1, param_2, param_3) => param_1 + "/" + param_2 + "/" + param_3;
  const dataMap = new Map();
  const dataMap_1 = new Map();
  let dataSet = new Set();
  const varData_19 = param_1 => {
    if (!dataMap_1.has(param_1)) {
      dataMap_1.set(param_1, new Set());
    }
    return dataMap_1.get(param_1);
  };
  varData_11.on("np-datagrid:rawupdates", async ([_0xc38b6a, _0x3ed9d0, _0x1c5b34, _0x4486fe, _0x1dee1f, _0x571845, _0x14ed1f]) => {
    _0x14ed1f = _0x14ed1f ?? 200;
    const varData_20 = _0xc38b6a ? _0xc38b6a.map(param_1 => Object.assign(Object.assign({}, param_1), {
      id: varData_6(param_1.id)
    })) : [];
    const varData_21 = _0x3ed9d0 ? _0x3ed9d0.map(param_1 => varData_6(param_1)) : [];
    const varData_22 = _0x1c5b34 ? _0x1c5b34.map(param_1 => Object.assign(Object.assign({}, param_1), {
      id: varData_6(param_1.id)
    })) : [];
    const dataSet_1 = new Set();
    varData_20.forEach(param_1 => {
      dataMap.set(param_1.id, param_1);
      varData_19(varData_18(param_1.cellX, param_1.cellY, param_1.worldId)).add(param_1.id);
      dataSet_1.add(param_1.ns);
    });
    varData_21.forEach(param_1 => {
      if (!dataMap.has(param_1)) {
        return;
      }
      const varData_23 = dataMap.get(param_1);
      varData_19(varData_18(varData_23.cellX, varData_23.cellY, varData_23.worldId)).delete(param_1);
      if (varData_23.ns) {
        dataSet_1.add(varData_23.ns);
      }
    });
    varData_22.forEach(({
      id: _0x380042,
      data: _0x1104c0,
      newCoords: _0x48e8cf
    }) => {
      if (!dataMap.has(_0x380042)) {
        return;
      }
      const varData_24 = dataMap.get(_0x380042);
      varData_24.data = _0x1104c0;
      if (_0x48e8cf) {
        varData_19(varData_18(varData_24.cellX, varData_24.cellY, varData_24.worldId)).delete(varData_24.id);
        varData_24.x = _0x48e8cf.x;
        varData_24.y = _0x48e8cf.y;
        varData_24.z = _0x48e8cf.z;
        varData_24.cellX = varData_16(varData_24.x, _0x14ed1f);
        varData_24.cellY = varData_17(varData_24.y, _0x14ed1f);
        varData_19(varData_18(varData_16(_0x48e8cf.x, _0x14ed1f), varData_17(_0x48e8cf.y, _0x14ed1f), varData_24.worldId)).add(varData_24.id);
      }
      if (varData_24.ns) {
        dataSet_1.add(varData_24.ns);
      }
    });
    const dataSet_2 = new Set();
    const dataSet_3 = new Set();
    const dataSet_4 = new Set();
    for (let loopIdx_1 = _0x1dee1f - 1; loopIdx_1 <= _0x1dee1f + 1; loopIdx_1++) {
      for (let loopIdx_2 = _0x4486fe - 1; loopIdx_2 <= _0x4486fe + 1; loopIdx_2++) {
        const varData_25 = varData_19(varData_18(loopIdx_2, loopIdx_1, _0x571845));
        if (varData_25?.size > 0) {
          varData_25.forEach(param_1 => {
            if (!dataSet.has(param_1)) {
              dataSet_2.add(param_1);
            }
            dataSet_4.add(param_1);
          });
        }
      }
    }
    dataSet.forEach(param_1 => {
      if (!dataSet_4.has(param_1)) {
        dataSet_3.add(param_1);
      }
    });
    dataSet = dataSet_4;
    new Set([...dataSet_2, ...dataSet_3]).forEach(param_1 => {
      if (!dataMap.has(param_1)) {
        return;
      }
      const varData_26 = dataMap.get(param_1);
      if (varData_26.ns) {
        dataSet_1.add(varData_26.ns);
      }
    });
    dataSet_1.forEach(param_1 => {
      emit("np-datagrid:updates", param_1, varData_20.filter(param_1_1 => param_1_1.ns === param_1), varData_21.filter(param_1_1 => {
        return dataMap.get(param_1_1)?.ns === param_1;
      }), varData_22.filter(({
        id: _0x310af7
      }) => {
        return dataMap.get(_0x310af7)?.ns === param_1;
      }).map(param_1_1 => Object.assign(Object.assign({}, param_1_1), {
        updatedItem: dataMap.get(param_1_1.id)
      })), Array.from(dataSet).filter(param_1_1 => {
        return dataMap.get(param_1_1)?.ns === param_1;
      }), Array.from(dataSet_2).filter(param_1_1 => {
        return dataMap.get(param_1_1)?.ns === param_1;
      }), Array.from(dataSet_3).filter(param_1_1 => {
        return dataMap.get(param_1_1)?.ns === param_1;
      }));
    });
  });
})();