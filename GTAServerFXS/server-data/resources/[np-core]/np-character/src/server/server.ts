// np-character server
;
(function () {
  const _res = GetCurrentResourceName();
  on("onResourceStart", res => {
    if (res !== _res) {
      return;
    }
  });
})();