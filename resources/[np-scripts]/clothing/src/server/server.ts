;
(function () {
  // clothing - Server-side - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  onNet("clothing:saveOutfit", (outfitData, outfitName) => {
    const src = source;
    const player = exports["np-base"]?.GetPlayer(src);
    if (!player?.character) {
      return;
    }
    exports.oxmysql.execute("INSERT INTO `character_outfits` (`character_id`,`name`,`data`) VALUES (?,?,?) ON DUPLICATE KEY UPDATE `data`=?", [player.character.id, outfitName, JSON.stringify(outfitData), JSON.stringify(outfitData)]);
  });
  onNet("clothing:getOutfits", () => {
    const src = source;
    const player = exports["np-base"]?.GetPlayer(src);
    if (!player?.character) {
      return;
    }
    exports.oxmysql.execute("SELECT * FROM `character_outfits` WHERE `character_id`=?", [player.character.id], rows => {
      emitNet("clothing:receiveOutfits", src, rows || []);
    });
  });
  on("onResourceStart", res => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Clothing loaded.`);
    }
  });
})();