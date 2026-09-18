// np-lib: sv_asyncExports.js
// Wrapped in IIFE to avoid 'resourceName' redeclaration when loaded via @np-lib in other resources
;(function() {
  const _resName = GetCurrentResourceName();
  const pendingCalls = new Map();
  let callIdCounter = 0;
  exports('asyncExport', (target, exportName, args, cb) => {
    const callId = ++callIdCounter;
    pendingCalls.set(callId, cb);
    emitNet('np-lib:asyncExport:call', -1, target, exportName, callId, args);
    setTimeout(() => {
      if (pendingCalls.has(callId)) { pendingCalls.delete(callId); if (cb) cb(null, 'Timeout'); }
    }, 5000);
  });
  onNet('np-lib:asyncExport:response', (callId, result) => {
    const cb = pendingCalls.get(callId);
    if (cb) { cb(result); pendingCalls.delete(callId); }
  });
})();