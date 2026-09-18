function tD(n)
	n = math.ceil(n * 100) / 100
	return n
end

RegisterNetEvent("SaveCommand")
AddEventHandler("SaveCommand", function(args, isJSON)
	local textString = ""
	for i = 2, #args do
		textString = textString .. " " .. args[i]
	end
	x, y, z = table.unpack(GetEntityCoords(PlayerPedId(), true))
	local PlayerName = GetPlayerName(PlayerId())
	Citizen.Trace("" .. tD(x) .. "," .. tD(y) .. "," .. tD(z) .. "," .. tD(GetEntityHeading(PlayerPedId())) .. "")
	TriggerServerEvent("SaveCoords", PlayerName, tD(x), tD(y), tD(z), tD(GetEntityHeading(PlayerPedId())), textString,
		isJSON)
end)
