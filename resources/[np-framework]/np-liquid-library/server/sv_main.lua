local currentUrls = {
    ["chalkboard"] = "https://i.imgur.com/placeholder.png",
    ["meeting"] = "https://i.imgur.com/placeholder.png"
}

RegisterNetEvent("np-liquidlibrary:geturl")
AddEventHandler("np-liquidlibrary:geturl", function(board)
    local src = source
    TriggerClientEvent("np-liquidlibrary:boardUrl", src, board, currentUrls[board])
end)

RegisterNetEvent("np-liquidlibrary:changeBoardUrl")
AddEventHandler("np-liquidlibrary:changeBoardUrl", function(board, url)
    currentUrls[board] = url
    TriggerClientEvent("np-liquidlibrary:boardUrlChanged", -1, board, url)
end)

CreateThread(function()
    if NPX and NPX.Procedures then
        NPX.Procedures.register("np-liquidlibrary:geturl", function(src, board)
            return currentUrls[board]
        end)
    end
end)
