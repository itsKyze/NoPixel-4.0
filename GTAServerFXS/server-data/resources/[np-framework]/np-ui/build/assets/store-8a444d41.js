const appName = "phone";
const store = {
  key: appName,
  initialState: {
    callActive: false,
    callMeta: {},
    initialized: false,
    hasPhone: true,
    phoneConfig: [],
    phoneEvents: {}
  }
};
export { appName, store as default };