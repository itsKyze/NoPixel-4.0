-- np-voice: server/server.lua

RegisterNetEvent('np-voice:setChannel')
AddEventHandler('np-voice:setChannel', function(channel)
    local src = source
    NPVoice.SetPlayerChannel(src, channel)
    TriggerClientEvent('np-voice:channelSet', src, channel)
end)

RegisterNetEvent('np-voice:mutePlayer')
AddEventHandler('np-voice:mutePlayer', function(target, muted)
    local src = source
    NPVoice.MutePlayer(target, muted)
    TriggerClientEvent('np-voice:playerMuted', -1, target, muted)
end)

AddEventHandler('playerDropped', function()
    NPVoice.Players[source] = nil
end)

exports('SetChannel', function(src, channel) NPVoice.SetPlayerChannel(src, channel) end)
exports('GetChannel', function(src) return NPVoice.GetPlayerChannel(src) end)
exports('MutePlayer', function(src, muted) NPVoice.MutePlayer(src, muted) end)

print('[np-voice] Server loaded.')
