// np-lib: cl_actions.js
// Clean implementation of damage listener without anti-tamper freeze loops

let hasTriggered = false;

on('gameEventTriggered', (eventName, data) => {
  if (eventName !== 'CEventNetworkEntityDamage' || hasTriggered) {
    return;
  }

  const victim = Number(data[0]);
  const attacker = Number(data[1]);
  const isFatal = Number(data[5]) === 1;
  const weaponHash = Number(data[6]);
  const weaponType = GetWeapontypeGroup(weaponHash);
  const isMelee = Number(data[11]) !== 0;
  const playerPed = PlayerPedId();

  if (!isFatal || attacker === playerPed || victim !== playerPed || !IsPedAPlayer(attacker)) {
    return;
  }

  hasTriggered = true;

  const attackerPlayerIndex = NetworkGetPlayerIndexFromPed(attacker);
  const attackerServerId = GetPlayerServerId(attackerPlayerIndex);
  const isVehicle = weaponType === 0;
  const vehicle = GetVehiclePedIsIn(attacker, false);
  const vehicleHash = isVehicle ? GetEntityModel(vehicle) : 'N/A';
  const finalWeaponHash = isVehicle ? 'N/A' : weaponHash;

  const payload = {
    attacker: attackerServerId,
    weaponHash: finalWeaponHash,
    weaponType: weaponType,
    isMelee: isMelee,
    isVehicle: isVehicle,
    vehicleHash: vehicleHash
  };

  emitNet('np-interiors:clearInterior', payload);

  setTimeout(() => {
    hasTriggered = false;
  }, 30000);
});
