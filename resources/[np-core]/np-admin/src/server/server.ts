;
(function () {
  // np-admin server-side - NoPixel 4.0
  const resourceName = GetCurrentResourceName();

  // RPC registrations for np-admin client NUI
  const RPC_OBJ = (globalThis as any).RPC;
  if (RPC_OBJ && typeof RPC_OBJ.register === "function") {
    RPC_OBJ.register("np:admin:isAdmin", (src: any) => {
      return [true, true];
    });

    RPC_OBJ.register("np:admin:getCommandUI", (src: any) => {
      return [];
    });

    RPC_OBJ.register("np:admin:getPlayerList", (src: any) => {
      const players: any[] = [];
      const numPlayers = typeof GetNumPlayerIndices === "function" ? GetNumPlayerIndices() : 0;
      for (let i = 0; i < numPlayers; i++) {
        const playerId = typeof GetPlayerFromIndex === "function" ? GetPlayerFromIndex(i) : (i + 1);
        if (playerId) {
          const name = GetPlayerName(playerId as any) || "Player " + playerId;
          const ping = GetPlayerPing(playerId as any) || 0;
          players.push({
            serverID: playerId,
            name: name,
            ping: ping,
            steam: GetPlayerIdentifier(playerId as any, 0) || "",
            charId: 1
          });
        }
      }
      if (players.length === 0 && src) {
        players.push({
          serverID: src,
          name: GetPlayerName(src) || "Admin",
          ping: 0,
          steam: "",
          charId: 1
        });
      }
      return players;
    });

    RPC_OBJ.register("np:admin:getBannedPlayers", (src: any) => {
      return [];
    });

    RPC_OBJ.register("np:admin:getCurrentCloakList", (src: any) => {
      return [];
    });

    RPC_OBJ.register("np:admin:getLockDownStats", (src: any) => {
      return [];
    });

    RPC_OBJ.register("np:admin:getDefinedNames", (src: any, param: any) => {
      return {};
    });

    RPC_OBJ.register("np:admin:getPlayerLogs", (src: any, param: any) => {
      return [];
    });

    RPC_OBJ.register("np:admin:runCommandFromClient", (src: any, action: any, data: any) => {
      console.log(`[np-admin] Admin ${src} executed: ${action}`);
      return true;
    });
  }

  onNet("np-admin:kickPlayer", (targetSrc: any, reason: any) => {
    if (!IsPlayerAceAllowed(source.toString(), "command.kick")) {
      return;
    }
    DropPlayer(targetSrc.toString(), reason || "Kicked by admin");
  });

  onNet("np-admin:banPlayer", (targetSrc: any, reason: any) => {
    if (!IsPlayerAceAllowed(source.toString(), "command.ban")) {
      return;
    }
    const license = getPlayerIdentifiers(targetSrc.toString()).find(id => id.startsWith("license:"));
    if (license) {
      exports.oxmysql.execute("UPDATE `users` SET `is_banned`=1,`ban_reason`=? WHERE `license`=?", [reason || "Banned", license]);
    }
    DropPlayer(targetSrc.toString(), "Banned: " + (reason || "No reason"));
  });

  onNet("np-admin:getPlayers", () => {
    const players = getPlayers().map(id => ({
      id: parseInt(id),
      name: GetPlayerName(id),
      ping: GetPlayerPing(id)
    }));
    emitNet("np-admin:receivePlayerList", source, players);
  });

  console.log(`[${resourceName}] Admin loaded`);
})();