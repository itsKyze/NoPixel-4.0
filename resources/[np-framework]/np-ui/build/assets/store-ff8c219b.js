const appName = "contextmenu";
const store = {
  key: appName,
  initialState: {
    activeIndex: 0,
    activeLevel: 0,
    menus: [],
    checkedKeys: {},
    position: "right",
    title: ""
  }
};
export { appName, store as default };