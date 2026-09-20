;
(function() {
  const resourceName = GetCurrentResourceName();
  const RPC_OBJ = globalThis.RPC;
  if (RPC_OBJ && typeof RPC_OBJ.register === "function") {
    RPC_OBJ.register("np:admin:isAdmin", (src) => {
      return [true, true];
    });
    RPC_OBJ.register("np:admin:getCommandUI", (src) => {
      return [];
    });
    RPC_OBJ.register("np:admin:getPlayerList", (src) => {
      var _a, _b;
      const players = [];
      const numPlayers = typeof GetNumPlayerIndices === "function" ? GetNumPlayerIndices() : 0;
      for (let i = 0; i < numPlayers; i++) {
        const playerId = typeof GetPlayerFromIndex === "function" ? GetPlayerFromIndex(i) : i + 1;
        if (playerId) {
          const name = GetPlayerName(playerId) || "Player " + playerId;
          const ping = GetPlayerPing(playerId) || 0;
          const player = (_a = globalThis.exports["np-base"]) == null ? void 0 : _a.GetPlayer(playerId);
          const char = player == null ? void 0 : player.character;
          players.push({
            serverID: playerId,
            name,
            ping,
            SteamID: GetPlayerIdentifier(playerId, 0) || "steam:0",
            charName: char ? char.first_name + " " + char.last_name : name,
            charID: char ? char.id : 1,
            queueType: "Standard"
          });
        }
      }
      if (players.length === 0 && src) {
        const name = GetPlayerName(src) || "Admin";
        const player = (_b = globalThis.exports["np-base"]) == null ? void 0 : _b.GetPlayer(src);
        const char = player == null ? void 0 : player.character;
        players.push({
          serverID: src,
          name,
          ping: 0,
          SteamID: GetPlayerIdentifier(src, 0) || "steam:0",
          charName: char ? char.first_name + " " + char.last_name : name,
          charID: char ? char.id : 1,
          queueType: "Standard"
        });
      }
      return {
        CurrentPlayers: players,
        Disconnected: []
      };
    });
    RPC_OBJ.register("np:admin:getBannedPlayers", (src) => {
      return [];
    });
    RPC_OBJ.register("np:admin:getCurrentCloakList", (src) => {
      return [];
    });
    RPC_OBJ.register("np:admin:getLockDownStats", (src) => {
      return [];
    });
    RPC_OBJ.register("np:admin:getDefinedNames", (src, param) => {
      return {};
    });
    RPC_OBJ.register("np:admin:getPlayerLogs", (src, param) => {
      return [];
    });
    RPC_OBJ.register("np:admin:runCommandFromClient", (src, action, data) => {
      console.log(`[np-admin] Admin ${src} executed: ${action}`);
      return true;
    });
  }
  onNet("np-admin:kickPlayer", (targetSrc, reason) => {
    if (!IsPlayerAceAllowed(source.toString(), "command.kick")) {
      return;
    }
    DropPlayer(targetSrc.toString(), reason || "Kicked by admin");
  });
  onNet("np-admin:banPlayer", (targetSrc, reason) => {
    if (!IsPlayerAceAllowed(source.toString(), "command.ban")) {
      return;
    }
    const license = getPlayerIdentifiers(targetSrc.toString()).find((id) => id.startsWith("license:"));
    if (license) {
      exports.oxmysql.execute("UPDATE `users` SET `is_banned`=1,`ban_reason`=? WHERE `license`=?", [reason || "Banned", license]);
    }
    DropPlayer(targetSrc.toString(), "Banned: " + (reason || "No reason"));
  });
  onNet("np-admin:getPlayers", () => {
    const players = getPlayers().map((id) => ({
      id: parseInt(id),
      name: GetPlayerName(id),
      ping: GetPlayerPing(id)
    }));
    emitNet("np-admin:receivePlayerList", source, players);
  });
  console.log(`[${resourceName}] Admin loaded`);
})();
