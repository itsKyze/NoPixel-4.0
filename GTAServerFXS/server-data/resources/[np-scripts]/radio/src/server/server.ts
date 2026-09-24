// radio - Server-side (Radio) - NoPixel 4.0
const resourceName = GetCurrentResourceName();

const playerChannels = new Map<number, number>();

on("onResourceStart", (res: string) => {
  if (res !== resourceName) {
    return;
  }
  console.log(`[${resourceName}] Radio server loaded.`);
});

on("playerDropped", () => {
  const src = (global as any).source;
  playerChannels.delete(src);
});

// Register radio RPC endpoints
if (typeof RPC !== "undefined" && RPC.register) {
  RPC.register("radio:setChannel", async (src: number, channel: number) => {
    try {
      const channelNum = Number(channel) || 0;
      playerChannels.set(src, channelNum);

      // Try setting on voice systems if present
      try {
        if (typeof exports !== "undefined" && exports["pma-voice"]?.setRadioChannel) {
          exports["pma-voice"].setRadioChannel(src, channelNum);
        } else if (typeof exports !== "undefined" && exports["np-voice"]?.setRadioChannel) {
          exports["np-voice"].setRadioChannel(src, channelNum);
        }
      } catch (err) {
        // Voice export not active, state tracked
      }

      // Update player state bag
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

  RPC.register("radio:show", async (src: number, show: boolean, data?: any) => {
    return true;
  });
}