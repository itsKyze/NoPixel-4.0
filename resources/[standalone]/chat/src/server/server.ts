// chat - Server-side - NoPixel 4.0
;
(function () {
  const chatHistory = [];
  const MAX_HISTORY = 100;

  // Register chat suggestion
  onNet("chat:addSuggestion", (name, help, params) => {});

  // Handle player message
  onNet("chatMessage", (authorName, color, message) => {
    const src = source;
    const playerName = GetPlayerName(src);
    const entry = {
      author: playerName,
      message,
      color,
      time: Date.now()
    };
    chatHistory.push(entry);
    if (chatHistory.length > MAX_HISTORY) {
      chatHistory.shift();
    }
    // Broadcast to all
    emitNet("chatMessage", -1, playerName, color || [255, 255, 255], message);
    console.log("[chat] " + playerName + ": " + message);
  });

  // Send history to newly connected player
  onNet("chat:requestHistory", () => {
    emitNet("chat:receiveHistory", source, chatHistory.slice(-50));
  });
  exports("addMessage", (author, color, message) => {
    const entry = {
      author,
      message,
      color,
      time: Date.now()
    };
    chatHistory.push(entry);
    if (chatHistory.length > MAX_HISTORY) {
      chatHistory.shift();
    }
    emitNet("chatMessage", -1, author, color || [255, 255, 255], message);
  });
  on("onResourceStart", res => {
    if (res === GetCurrentResourceName()) {
      console.log("[chat] Chat server loaded.");
    }
  });
})();