NPX.DB = NPX.DB or {}
function NPX.DB.Execute(self, query, params, cb)
    exports["oxmysql"]:execute(query, params or {}, cb or function() end)
end
function NPX.DB.FetchAll(self, query, params, cb)
    exports["oxmysql"]:execute(query, params or {}, function(r) if cb then cb(r or {}) end end)
end
function NPX.DB.FetchScalar(self, query, params, cb)
    exports["oxmysql"]:scalar(query, params or {}, function(r) if cb then cb(r) end end)
end
function NPX.DB.Insert(self, query, params, cb)
    exports["oxmysql"]:insert(query, params or {}, function(id) if cb then cb(id) end end)
end
function NPX.DB.FetchSync(self, query, params)
    local p = promise.new()
    exports["oxmysql"]:execute(query, params or {}, function(r) p:resolve(r) end)
    return Citizen.Await(p)
end
function NPX.DB.InsertSync(self, query, params)
    local p = promise.new()
    exports["oxmysql"]:insert(query, params or {}, function(r) p:resolve(r) end)
    return Citizen.Await(p)
end
exports("Execute",     function(q,p,cb) NPX.DB:Execute(q,p,cb) end)
exports("FetchAll",    function(q,p,cb) NPX.DB:FetchAll(q,p,cb) end)
exports("FetchScalar", function(q,p,cb) NPX.DB:FetchScalar(q,p,cb) end)
exports("Insert",      function(q,p,cb) NPX.DB:Insert(q,p,cb) end)
exports("FetchSync",   function(q,p) return NPX.DB:FetchSync(q,p) end)
exports("InsertSync",  function(q,p) return NPX.DB:InsertSync(q,p) end)