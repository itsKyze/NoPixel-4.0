// np-lib: sv_rpc.js - Server-side RPC system
;(function() {
  const pendingRpcs = new Map();
  let rpcIdCounter = 0;
  const registeredHandlers = new Map();

  function paramPacker(...params) {
    const pack = [];
    for (let i = 0; i < params.length; i++) {
      pack.push({ param: params[i] });
    }
    if (pack.length === 0) {
      pack.push({ param: null });
    }
    return pack;
  }

  function paramUnpacker(params) {
    if (!params) return [];
    if (Array.isArray(params)) {
      return params
        .filter(p => p !== null && p !== undefined && typeof p === "object" && "param" in p && p.param !== undefined)
        .map(p => p.param);
    }
    return [params];
  }

  const RPC = {
    register: function(name, handler) {
      registeredHandlers.set(name, handler);
      onNet("rpc:request:" + name, async function(origin, callID, params, isLua) {
        const src = source;
        let args = params;
        if (isLua) {
          args = paramUnpacker(params);
        } else if (!Array.isArray(args)) {
          args = (args !== undefined && args !== null) ? [args] : [];
        }

        let result;
        try {
          result = await handler(src, ...args);
        } catch (err) {
          console.error(`[RPC-SERVER] Error executing ${name}:`, err);
          result = null;
        }

        let response = result;
        if (isLua) {
          response = paramPacker(result);
        }
        emitNet("rpc:response", src, origin, callID, response, !!isLua);
      });
    },

    execute: async function(src, name, ...params) {
      return new Promise((resolve, reject) => {
        const id = ++rpcIdCounter;
        pendingRpcs.set(id, (res, err) => {
          if (err) reject(err);
          else resolve(res);
        });
        emitNet("rpc:request:" + name, src, GetCurrentResourceName(), id, params, false);
        setTimeout(() => {
          if (pendingRpcs.has(id)) {
            pendingRpcs.delete(id);
            resolve(null);
          }
        }, 15000);
      });
    }
  };

  globalThis.RPC = RPC;
  if (typeof global !== "undefined") {
    global.RPC = RPC;
  }

  // Server -> Client RPC (call client, get result back)
  exports('TriggerClientCallback', (src, name, args, cb) => {
    const id = ++rpcIdCounter;
    pendingRpcs.set(id, cb);
    emitNet('np-lib:rpc:callClient', src, name, id, args);
    setTimeout(() => {
      if (pendingRpcs.has(id)) { pendingRpcs.delete(id); if (cb) cb(null, 'Timeout'); }
    }, 10000);
  });

  // Client -> Server callback response
  onNet('np-lib:rpc:clientResponse', (rpcId, result) => {
    const cb = pendingRpcs.get(rpcId);
    if (cb) { cb(result); pendingRpcs.delete(rpcId); }
  });

  // Register server-side callbacks (client calls server, gets result)
  const serverCallbacks = new Map();
  exports('RegisterCallback', (name, handler) => {
    serverCallbacks.set(name, handler);
    RPC.register(name, handler);
  });

  onNet('np-lib:rpc:callServer', (name, rpcId, args) => {
    const src = source;
    const handler = serverCallbacks.get(name) || registeredHandlers.get(name);
    if (!handler) {
      emitNet('np-lib:rpc:serverResponse', src, rpcId, null, 'No handler for: ' + name);
      return;
    }
    const result = handler(src, args);
    if (result && typeof result.then === 'function') {
      result.then(r => emitNet('np-lib:rpc:serverResponse', src, rpcId, r, null));
    } else {
      emitNet('np-lib:rpc:serverResponse', src, rpcId, result, null);
    }
  });

  exports('RPC', () => RPC);
  exports('register', RPC.register);
  exports('execute', RPC.execute);
})();