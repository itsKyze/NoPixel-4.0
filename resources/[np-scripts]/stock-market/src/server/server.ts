;
(function () {
  // stock-market - Server-side - NoPixel 4.0
  const resourceName = GetCurrentResourceName();
  const stocks = {
    NPC: {
      price: 100,
      trend: 0
    },
    BCK: {
      price: 50,
      trend: 0
    },
    WZL: {
      price: 75,
      trend: 0
    },
    LSC: {
      price: 200,
      trend: 0
    }
  };
  function updatePrices() {
    for (const s of Object.values(stocks)) {
      const change = (Math.random() - 0.5) * 10;
      s.price = Math.max(1, Math.round(s.price + change));
      s.trend = change > 0 ? 1 : -1;
    }
    emitNet("stock-market:update", -1, stocks);
  }
  setInterval(updatePrices, 60000);
  onNet("stock-market:requestStocks", () => {
    emitNet("stock-market:receiveStocks", source, stocks);
  });
  on("onResourceStart", res => {
    if (res === resourceName) {
      updatePrices();
      console.log(`[${resourceName}] Stock Market loaded.`);
    }
  });
})();