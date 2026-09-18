// np-db/server/sv_db.js - Database bridge for NoPixel 4.0
// Wrapped in IIFE to avoid 'resourceName' clash when loaded as @np-db/server/lib.js
;(function() {
  const _resName = GetCurrentResourceName();
  setImmediate(() => console.log(`[${_resName}] DB bridge ready`));
  exports('Execute',     (q, p, cb) => exports.oxmysql.execute(q, p||[], cb||function(){}));
  exports('FetchAll',    (q, p, cb) => exports.oxmysql.execute(q, p||[], r => cb && cb(r||[])));
  exports('FetchScalar', (q, p, cb) => exports.oxmysql.scalar(q,  p||[], cb||function(){}));
  exports('Insert',      (q, p, cb) => exports.oxmysql.insert(q,  p||[], cb||function(){}));
  exports('ExecuteAsync', (q, p) => new Promise(resolve => exports.oxmysql.execute(q, p||[], r => resolve(r||[]))));
  exports('ScalarAsync',  (q, p) => new Promise(resolve => exports.oxmysql.scalar(q, p||[], r => resolve(r))));
  exports('InsertAsync',  (q, p) => new Promise(resolve => exports.oxmysql.insert(q, p||[], r => resolve(r))));
})();