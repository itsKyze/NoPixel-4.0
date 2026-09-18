NPX.Events = NPX.Events or {}
RegisterNetEvent("np-events:listenEvent")
AddEventHandler("np-events:listenEvent", function(id, event, args)
    local src = source
    TriggerClientEvent("np-events:listenEvent", src, id, args)
end)
RegisterNetEvent("np-base:consoleLog")
AddEventHandler("np-base:consoleLog", function(msg, mod)
    if NPX.Core then NPX.Core:ConsoleLog(msg, mod or "Client") end
end)
RegisterNetEvent("np:fml:isInTime")
AddEventHandler("np:fml:isInTime", function(state)
    print(("[np-base] Admin report from %s - state: %s"):format(source, tostring(state)))
end)