const appName = "badge";
const store = {
  key: appName,
  initialState: {
    name: "",
    badge: "",
    department: "",
    rank: "",
    mount: false,
    image: ""
  }
};
export { appName, store as default };