-- np-infinity: server/scope/sv_scope.lua
-- Scope management stub
NPScope = NPScope or {}
function NPScope.IsInScope(src, target)
    local srcCoords = GetEntityCoords(GetPlayerPed(src))
    local tgtCoords = GetEntityCoords(GetPlayerPed(target))
    return #(srcCoords - tgtCoords) < 500.0
end
print('[np-infinity] Scope loaded.')