// np-lib: sv_sql.js - oxmysql JavaScript wrapper
;(function() {
  exports('Execute', (q, p, cb) => exports.oxmysql.execute(q, p||[], cb||function(){}));
  exports('FetchAll', (q, p, cb) => exports.oxmysql.execute(q, p||[], r => cb && cb(r||[])));
  exports('FetchScalar', (q, p, cb) => exports.oxmysql.scalar(q, p||[], cb||function(){}));
  exports('Insert', (q, p, cb) => exports.oxmysql.insert(q, p||[], cb||function(){}));
  exports('ExecuteAsync', (q, p) => new Promise(resolve => exports.oxmysql.execute(q, p||[], r => resolve(r||[]))));
  exports('ScalarAsync', (q, p) => new Promise(resolve => exports.oxmysql.scalar(q, p||[], r => resolve(r))));
  exports('InsertAsync', (q, p) => new Promise(resolve => exports.oxmysql.insert(q, p||[], r => resolve(r))));
})();