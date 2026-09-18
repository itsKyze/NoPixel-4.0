;
(function () {
  // housing - Server-side - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  const playerHouses = new Map();
  on("np-base:characterSelected", (src, char) => {
    exports.oxmysql.execute("SELECT * FROM `houses` WHERE `owner_id`=?", [char.id], rows => {
      playerHouses.set(src, rows || []);
      emitNet("housing:receiveHouses", src, rows || []);
    });
  });
  on("playerDropped", () => {
    playerHouses.delete(source);
  });
  onNet("housing:requestHouses", () => {
    emitNet("housing:receiveHouses", source, playerHouses.get(source) || []);
  });
  onNet("housing:setFurniture", (houseId, furniture) => {
    const player = exports["np-base"]?.GetPlayer(source);
    if (!player?.character) {
      return;
    }
    exports.oxmysql.execute("UPDATE `houses` SET `furniture`=? WHERE `id`=? AND `owner_id`=?", [JSON.stringify(furniture), houseId, player.character.id]);
  });
  exports("GetPlayerHouses", src => playerHouses.get(src) || []);
  on("onResourceStart", res => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Housing loaded.`);
    }
  });
})();