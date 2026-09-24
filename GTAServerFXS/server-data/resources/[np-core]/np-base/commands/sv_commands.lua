RegisterCommand("me", function(src, args)
    if not args[1] then return end
    local msg = table.concat(args, " ")
    for _, id in ipairs(GetPlayers()) do
        TriggerClientEvent("np-commands:meCommand", tonumber(id), src, msg, 5000)
    end
end, false)
RegisterCommand("do", function(src, args)
    if not args[1] then return end
    local msg = table.concat(args, " ")
    TriggerClientEvent("chat:addMessage", -1, {color={173,216,230}, args={"[DO] "..GetPlayerName(src), msg}})
end, false)
RegisterCommand("ooc", function(src, args)
    if not args[1] then return end
    local msg = table.concat(args, " ")
    TriggerClientEvent("chat:addMessage", -1, {color={128,128,128}, args={"[OOC] "..GetPlayerName(src), msg}})
end, false)
RegisterCommand("coords", function(src)
    if NPX.Rank:IsAdmin(src) then TriggerClientEvent("np-commands:requestCoords", src) end
end, false)