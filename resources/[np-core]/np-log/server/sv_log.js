// np-log: server/sv_log.js - JavaScript log bridge
;(function() {
  exports('AddLogJS', (level, resource, message, data) => {
    try {
      exports['np-log'].AddLog(level || 'INFO', resource || 'server', message, data || null);
    } catch(e) {
      console.error('[np-log] sv_log.js bridge error:', e.message);
    }
  });
})();