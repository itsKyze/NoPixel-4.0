-- np-voice: server/np_lib.lua
-- Additional voice library functions

function NPVoice.GetNearbyPlayers(src, radius)
    radius = radius or 10.0
    local srcCoords = GetEntityCoords(GetPlayerPed(src))
    local nearby = {}
    for _, pid in ipairs(GetPlayers()) do
        local target = tonumber(pid)
        if target ~= src then
            local targetCoords = GetEntityCoords(GetPlayerPed(target))
            if #(srcCoords - targetCoords) <= radius then
                table.insert(nearby, target)
            end
        end
    end
    return nearby
end
