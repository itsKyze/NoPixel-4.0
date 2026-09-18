NPX.Util = NPX.Util or {}
function NPX.Util.GetLicense(self, src)
    for _, v in ipairs(GetPlayerIdentifiers(src)) do
        if string.sub(v,1,8) == "license:" then return v end
    end
end
function NPX.Util.GetLicense2(self, src)
    for _, v in ipairs(GetPlayerIdentifiers(src)) do
        if string.sub(v,1,9) == "license2:" then return v end
    end
end
function NPX.Util.GetHexId(self, src)
    for _, v in ipairs(GetPlayerIdentifiers(src)) do
        if string.sub(v,1,6) == "steam:" then return v end
    end
end
function NPX.Util.GetDiscord(self, src)
    for _, v in ipairs(GetPlayerIdentifiers(src)) do
        if string.sub(v,1,8) == "discord:" then return v end
    end
end
function NPX.Util.GetFivemId(self, src)
    for _, v in ipairs(GetPlayerIdentifiers(src)) do
        if string.sub(v,1,6) == "fivem:" then return v end
    end
end
function NPX.Util.Uuid(self)
    math.randomseed(os.time())
    local t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
    return string.gsub(t,"[xy]", function(c)
        local v = (c=="x") and math.random(0,0xf) or math.random(8,0xb)
        return string.format("%x",v)
    end)
end
function NPX.Util.TableLength(self, tbl)
    local n=0; for _ in pairs(tbl) do n=n+1 end; return n
end