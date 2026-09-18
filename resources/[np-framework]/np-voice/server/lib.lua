-- np-voice: server/lib.lua
NPVoice = NPVoice or {}
NPVoice.Players = {}

function NPVoice.SetPlayerChannel(src, channel)
    NPVoice.Players[src] = NPVoice.Players[src] or {}
    NPVoice.Players[src].channel = channel
end

function NPVoice.GetPlayerChannel(src)
    if NPVoice.Players[src] then return NPVoice.Players[src].channel end
    return 0
end

function NPVoice.MutePlayer(src, muted)
    NPVoice.Players[src] = NPVoice.Players[src] or {}
    NPVoice.Players[src].muted = muted
end
