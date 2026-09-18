RegisterCommand("heartattack", () => {
  NPX.Procedures.execute('np-miscscripts:heartattack');
}, false)

NPX.Procedures.register('np-miscscripts:heartattack', () => {
  exports["wounds"].setEntityHealth(PlayerPedId(), 0)
})