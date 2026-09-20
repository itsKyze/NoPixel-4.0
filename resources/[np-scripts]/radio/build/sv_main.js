const resourceName = GetCurrentResourceName();
const playerChannels = /* @__PURE__ */ new Map();
on("onResourceStart", (res) => {
  if (res !== resourceName) {
    return;
  }
  console.log(`[${resourceName}] Radio server loaded.`);
});
on("playerDropped", () => {
  const src = global.source;
  playerChannels.delete(src);
});
if (typeof RPC !== "undefined" && RPC.register) {
  RPC.register("radio:setChannel", async (src, channel) => {
    var _a, _b;
    try {
      const channelNum = Number(channel) || 0;
      playerChannels.set(src, channelNum);
      try {
        if (typeof exports !== "undefined" && ((_a = exports["pma-voice"]) == null ? void 0 : _a.setRadioChannel)) {
          exports["pma-voice"].setRadioChannel(src, channelNum);
        } else if (typeof exports !== "undefined" && ((_b = exports["np-voice"]) == null ? void 0 : _b.setRadioChannel)) {
          exports["np-voice"].setRadioChannel(src, channelNum);
        }
      } catch (err) {
      }
      const playerEntity = GetPlayerPed(String(src));
      if (playerEntity && DoesEntityExist(playerEntity)) {
        Entity(playerEntity).state.set("radioChannel", channelNum, true);
      }
      return { success: true, channel: channelNum };
    } catch (e) {
      console.error(`[radio] Error in radio:setChannel:`, e);
      return { success: false, channel: 0 };
    }
  });
  RPC.register("radio:show", async (src, show, data) => {
    return true;
  });
}
