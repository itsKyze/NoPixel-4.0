-- np-lib: sv_sql.lua - oxmysql wrapper
NPSQL = NPSQL or {}
function NPSQL.Execute(query, params, cb)
    exports["oxmysql"]:execute(query, params or {}, cb or function() end)
end
function NPSQL.FetchAll(query, params, cb)
    exports["oxmysql"]:execute(query, params or {}, function(r) if cb then cb(r or {}) end end)
end
function NPSQL.FetchScalar(query, params, cb)
    exports["oxmysql"]:scalar(query, params or {}, function(r) if cb then cb(r) end end)
end
function NPSQL.Insert(query, params, cb)
    exports["oxmysql"]:insert(query, params or {}, function(id) if cb then cb(id) end end)
end
function NPSQL.ExecuteSync(query, params)
    local p = promise.new()
    exports["oxmysql"]:execute(query, params or {}, function(r) p:resolve(r) end)
    return Citizen.Await(p)
end
function NPSQL.ScalarSync(query, params)
    local p = promise.new()
    exports["oxmysql"]:scalar(query, params or {}, function(r) p:resolve(r) end)
    return Citizen.Await(p)
end
function NPSQL.InsertSync(query, params)
    local p = promise.new()
    exports["oxmysql"]:insert(query, params or {}, function(r) p:resolve(r) end)
    return Citizen.Await(p)
end
exports("Execute",     function(q,p,cb) NPSQL.Execute(q,p,cb) end)
exports("FetchAll",    function(q,p,cb) NPSQL.FetchAll(q,p,cb) end)
exports("FetchScalar", function(q,p,cb) NPSQL.FetchScalar(q,p,cb) end)
exports("Insert",      function(q,p,cb) NPSQL.Insert(q,p,cb) end)
exports("ExecuteSync", function(q,p) return NPSQL.ExecuteSync(q,p) end)
exports("ScalarSync",  function(q,p) return NPSQL.ScalarSync(q,p) end)
exports("InsertSync",  function(q,p) return NPSQL.InsertSync(q,p) end)