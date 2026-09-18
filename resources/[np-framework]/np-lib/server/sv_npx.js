// np-lib: sv_npx.js - NPX bridge for server-side
;(function() {
  // Provide a bridge to the npx Library from np-lib context
  exports('GetNPX', () => {
    try { return exports['npx'].GetLibrary(); } catch(e) { return null; }
  });

  exports('GetDB', () => {
    return {
      execute: (q,p,cb) => exports['np-db'].Execute(q,p,cb),
      fetchAll: (q,p,cb) => exports['np-db'].FetchAll(q,p,cb),
      scalar: (q,p,cb) => exports['np-db'].FetchScalar(q,p,cb),
      insert: (q,p,cb) => exports['np-db'].Insert(q,p,cb),
    };
  });
})();