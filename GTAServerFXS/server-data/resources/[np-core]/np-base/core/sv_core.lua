NPX.Core    = NPX.Core or {}
NPX.Players = NPX.Players or {}
function NPX.Core.ConsoleLog(self, msg, mod)
    print(string.format("[NPX LOG - %s] %s", mod or "Core", tostring(msg)))
end
function getModule(module)
    if not NPX[module] then print("Warning: module not found: "..tostring(module)); return false end
    return NPX[module]
end
function addModule(module, tbl) NPX[module] = tbl end
exports("getModule", getModule)
exports("addModule", addModule)
function NPX.Core.SetNetworkVar(self, src, var, val)
    TriggerClientEvent("np-base:networkVar", src, var, val)
end
exports("GetPlayer",     function(src) return NPX.Players[src] end)
exports("GetPlayers",    function() return NPX.Players end)
exports("SetNetworkVar", function(src, var, val) NPX.Core:SetNetworkVar(src, var, val) end)