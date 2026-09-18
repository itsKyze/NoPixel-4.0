NPX.Core = NPX.Core or {}

function NPX.Core.ConsoleLog(self, msg, mod)
    print(string.format("[NPX CLIENT - %s] %s", mod or "Core", tostring(msg)))
end

exports("getModule", function(module)
    if not NPX[module] then return false end
    return NPX[module]
end)

exports("addModule", function(module, tbl)
    NPX[module] = tbl
end)
