-- np-signin: server/sv_signin.lua
local signedIn = {}

RegisterNetEvent('np-signin:signIn')
AddEventHandler('np-signin:signIn', function()
    local src = source
    signedIn[src] = true
    TriggerClientEvent('np-signin:onSignIn', src)
    print(('[np-signin] Player %d signed in.'):format(src))
end)

RegisterNetEvent('np-signin:signOut')
AddEventHandler('np-signin:signOut', function()
    local src = source
    signedIn[src] = nil
    TriggerClientEvent('np-signin:onSignOut', src)
end)

exports('IsSignedIn', function(src) return signedIn[src] == true end)
exports('GetSignedInPlayers', function()
    local result = {}
    for src, _ in pairs(signedIn) do table.insert(result, src) end
    return result
end)

AddEventHandler('playerDropped', function() signedIn[source] = nil end)
print('[np-signin] Server loaded.')
