;
(function() {
  const resourceName = GetCurrentResourceName();
  RegisterCommand("me", (src, args) => {
    if (!args.length) {
      return;
    }
    const msg = args.join(" ");
    for (const id of getPlayers()) {
      emitNet("np-commands:meCommand", parseInt(id), src, msg, 5e3);
    }
  }, false);
  RegisterCommand("do", (src, args) => {
    if (!args.length) {
      return;
    }
    emitNet("chat:addMessage", -1, {
      color: [173, 216, 230],
      args: [`[DO] ${GetPlayerName(src)}`, args.join(" ")]
    });
  }, false);
  RegisterCommand("ooc", (src, args) => {
    if (!args.length) {
      return;
    }
    emitNet("chat:addMessage", -1, {
      color: [150, 150, 150],
      args: [`[OOC] ${GetPlayerName(src)}`, args.join(" ")]
    });
  }, false);
  console.log(`[${resourceName}] Commands loaded`);
})();
