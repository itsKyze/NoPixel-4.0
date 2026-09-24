NPX.Rank = NPX.Rank or {}
NPX.Rank.Levels = {
    superadmin = 100, admin = 90, moderator = 80,
    helper = 70, streamer = 60, vip = 50, whitelist = 10, user = 1
}
function NPX.Rank.GetLevel(self, role) return self.Levels[role] or 0 end
function NPX.Rank.HasPermission(self, src, minRole)
    local user = NPX.Players[src]
    if not user then return false end
    return self:GetLevel(user.role or "user") >= self:GetLevel(minRole)
end
function NPX.Rank.IsAdmin(self, src)      return self:HasPermission(src, "admin") end
function NPX.Rank.IsModerator(self, src)  return self:HasPermission(src, "moderator") end
function NPX.Rank.IsSuperAdmin(self, src) return self:HasPermission(src, "superadmin") end
exports("HasPermission", function(src, role) return NPX.Rank:HasPermission(src, role) end)
exports("IsAdmin",       function(src) return NPX.Rank:IsAdmin(src) end)
exports("IsModerator",   function(src) return NPX.Rank:IsModerator(src) end)
exports("IsSuperAdmin",  function(src) return NPX.Rank:IsSuperAdmin(src) end)