const store = {
  key: "main",
  initialState: {
    active: {
      app: "",
      data: null,
      show: false
    },
    failed: false,
    initComplete: false,
    loaded: false,
    renderReady: false,
    theme: "dark",
    restarting: false
  }
};
export { store as default };