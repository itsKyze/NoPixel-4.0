;
(function () {
  // twatter - Server-side - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  const tweets = [];
  onNet("twatter:post", (message, image) => {
    const src = source;
    const player = exports["np-base"]?.GetPlayer(src);
    if (!player?.character) {
      return;
    }
    const tweet = {
      id: tweets.length + 1,
      author: `${player.character.firstname} ${player.character.lastname}`,
      message,
      image,
      time: Date.now(),
      likes: 0
    };
    tweets.unshift(tweet);
    if (tweets.length > 100) {
      tweets.pop();
    }
    emitNet("twatter:newTweet", -1, tweet);
    exports.oxmysql.execute("INSERT INTO `twatter` (`character_id`,`message`,`image`) VALUES (?,?,?)", [player.character.id, message, image || null]);
  });
  onNet("twatter:requestFeed", () => {
    emitNet("twatter:receiveFeed", source, tweets.slice(0, 50));
  });
  on("onResourceStart", res => {
    if (res === resourceName) {
      console.log(`[${resourceName}] Twatter loaded.`);
    }
  });
})();