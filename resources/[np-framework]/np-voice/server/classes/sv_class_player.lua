-- np-voice: server/classes/sv_class_player.lua
-- Voice player class
NPVoicePlayer = {}
NPVoicePlayer.__index = NPVoicePlayer

function NPVoicePlayer.new(src)
    return setmetatable({ src = src, channel = 0, muted = false, volume = 1.0 }, NPVoicePlayer)
end

function NPVoicePlayer:SetChannel(channel)
    self.channel = channel
end

function NPVoicePlayer:GetChannel()
    return self.channel
end
