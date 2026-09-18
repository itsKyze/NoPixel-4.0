;
(function () {
  // phone - Server-side - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  const phoneNumbers = new Map();
  onNet("phone:register", number => {
    phoneNumbers.set(source, number);
    emitNet("phone:registered", source, number);
  });
  onNet("phone:call", targetNumber => {
    const src = source;
    let targetSrc = null;
    for (const [s, n] of phoneNumbers) {
      if (n === targetNumber) {
        targetSrc = s;
        break;
      }
    }
    if (!targetSrc) {
      emitNet("phone:callFailed", src, "Not reachable");
      return;
    }
    emitNet("phone:incomingCall", targetSrc, phoneNumbers.get(src), src);
  });
  onNet("phone:acceptCall", callerSrc => {
    emitNet("phone:callAccepted", callerSrc, source);
  });
  onNet("phone:endCall", otherSrc => {
    emitNet("phone:callEnded", otherSrc);
  });
  onNet("phone:sendMessage", (targetNumber, message) => {
    const src = source;
    let targetSrc = null;
    for (const [s, n] of phoneNumbers) {
      if (n === targetNumber) {
        targetSrc = s;
        break;
      }
    }
    if (targetSrc) {
      emitNet("phone:receiveMessage", targetSrc, phoneNumbers.get(src), message);
    }
  });
  on("playerDropped", () => {
    phoneNumbers.delete(source);
  });
  on("onResourceStart", res => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Phone loaded.`);
    }
  });
})();