const appName = "status-hud";
const store = {
  key: appName,
  initialState: {
    show: false,
    title: "",
    values: []
  }
};
export { appName, store as default };