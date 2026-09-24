-- np-queue client-side
local isInQueue = false
local queuePosition = 0
RegisterNetEvent("np-queue:updatePosition")
AddEventHandler("np-queue:updatePosition", function(pos, total)
    queuePosition = pos
    isInQueue = pos > 0
end)
RegisterNetEvent("np-queue:done")
AddEventHandler("np-queue:done", function()
    isInQueue = false
    queuePosition = 0
end)