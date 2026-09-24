-- np-character client-side
NPX = NPX or {}
NPX.Character = NPX.Character or {}
NPX.Character.Current = nil
function NPX.Character.Set(self, char)
    self.Current = char
    TriggerEvent("np-character:characterLoaded", char)
end
function NPX.Character.Get(self) return self.Current end
RegisterNetEvent("np-base:characterSelected")
AddEventHandler("np-base:characterSelected", function(char)
    NPX.Character:Set(char)
end)
exports("GetCurrentCharacter", function() return NPX.Character:Get() end)