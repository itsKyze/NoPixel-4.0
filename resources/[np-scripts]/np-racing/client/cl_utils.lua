function getCardinalDirectionFromHeading()
  local heading = GetEntityHeading(PlayerPedId())
  if heading >= 315 or heading < 45 then
      return "North Bound"
  elseif heading >= 45 and heading < 135 then
      return "West Bound"
  elseif heading >=135 and heading < 225 then
      return "South Bound"
  elseif heading >= 225 and heading < 315 then
      return "East Bound"
  end
end

function isUnacceptedVehicleClass(expectedVehicleClass, vehicleClass)
  if expectedVehicleClass == "B" then
    if not (vehicleClass == "B" or vehicleClass == "C" or vehicleClass == "D") then
      return "Must be in B, C, or D class vehicle"
    end
  elseif expectedVehicleClass ~= "Open" and vehicleClass ~= expectedVehicleClass then
    return "Must be in " .. expectedVehicleClass .. " class vehicle"
  end
  return nil
end
