const dataMap = new Map();
const resourceName = GetCurrentResourceName();
let varData_1 = 0;
function handleAction_1(param_1, ...params) {
  const varData_2 = msgpack_pack(params);
  if (varData_2.length < 5000) {
    TriggerServerEventInternal(param_1, varData_2, varData_2.length);
  } else {
    TriggerLatentServerEventInternal(param_1, varData_2, varData_2.length, 128000);
  }
}
function handleAction_2(param_1, param_2) {
  onNet(param_1, param_2);
}
function handleAction_3(...params) {
  const varData_3 = [];
  for (let loopIdx = 0; loopIdx < params.length; loopIdx += 1) {
    varData_3[loopIdx] = {
      param: params[loopIdx]
    };
  }
  return varData_3;
}
function handleAction_4(params) {
  const varData_4 = [];
  params.forEach(param_1 => varData_4.push(param_1.param));
  return varData_4;
}
async function handleAction_5(param_1, param_2) {
  handleAction_2("rpc:request:" + param_1, async function (param_1_1, param_2_1, params, param_4) {
    let varData_5;
    if (param_4) {
      params = handleAction_4(params);
    }
    try {
      varData_5 = await param_2(...params);
    } catch (err) {
      emit("rpc:client:error", resourceName, param_1_1, param_1, err.message);
    }
    if (typeof varData_5 === "undefined") {
      varData_5 = [];
    } else if (param_4) {
      varData_5 = handleAction_3(varData_5);
    }
    handleAction_1("rpc:response", param_1_1, param_2_1, varData_5, param_4);
  });
}
async function handleAction_6(param_1, ...params) {
  const varData_6 = varData_1;
  varData_1++;
  const promise = new Promise((param_1_1, param_2) => {
    dataMap.set(varData_6, {
      resolve: param_1_1,
      reject: param_2
    });
  });
  handleAction_1("rpc:request:" + param_1, resourceName, varData_6, params, false);
  const promise_1 = new Promise(param_1_1 => {
    setTimeout(() => {
      if (dataMap.has(varData_6)) {
        dataMap.delete(varData_6);
      }
      return param_1_1([]);
    }, 20000);
  });
  return await Promise.race([promise, promise_1]);
}
function handleAction_7(param_1, param_2, param_3, param_4) {
  if (resourceName === param_1 && dataMap.has(param_2)) {
    if (param_4) {
      param_3 = handleAction_4(param_3);
    }
    dataMap.get(param_2).resolve(param_3);
    dataMap.delete(param_2);
  }
}
const RPC = {
  register: handleAction_5,
  execute: handleAction_6
};
handleAction_2("rpc:response", handleAction_7);