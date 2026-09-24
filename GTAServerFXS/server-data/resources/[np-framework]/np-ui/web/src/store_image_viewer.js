const appName = "image-viewer";
const store = {
  key: appName,
  initialState: {
    show: false,
    imageUrl: ""
  }
};
export { appName, store as default };