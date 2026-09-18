Flags = {}

Flags["VehicleFlags"] = {
    isPlayerVehicle = 2,
    isStolenVehicle = 4,
    isScrapVehicle = 8,
    isHotwiredVehicle = 16,
    isTowingVehicle = 32,
    isBoostingContractVehicle = 64,
    isRentalVehicle = 128,
}

local curPedFlag = 1
local function prevPedFlag()
  curPedFlag = curPedFlag * 2
  return curPedFlag / 2
end
Flags["PedFlags"] = {
    isDead = prevPedFlag(),
    isCuffed = prevPedFlag(),
    isRobbing = prevPedFlag(),
    isEscorting = prevPedFlag(),
    isEscorted = prevPedFlag(),
    isBlindfolded = prevPedFlag(),
    isInTrunk = prevPedFlag(),
    isInsideVanillaUnicorn = prevPedFlag(),
    isNPC = prevPedFlag(),
    isJobEmployer = prevPedFlag(),
    isSittingOnChair = prevPedFlag(),
    isPoledancing = prevPedFlag(),
    isVehicleSpawner = prevPedFlag(),
    isBoatRenter = prevPedFlag(),
    isBankAccountManager = prevPedFlag(),
    isShopKeeper = prevPedFlag(),
    isWeaponShopKeeper = prevPedFlag(),
    isToolShopKeeper = prevPedFlag(),
    isSportShopKeeper = prevPedFlag(),
    isWeedShopKeeper = prevPedFlag(),
    isJobVehShopKeeper = prevPedFlag(),
    isWineryShopKeeper = prevPedFlag(),
    isGagged = prevPedFlag(),
    isBlipDisabled = prevPedFlag(),
    isDeafened = prevPedFlag(),
    isSewerDoc = prevPedFlag(),
}


Flags["ObjectFlags"] = {}
