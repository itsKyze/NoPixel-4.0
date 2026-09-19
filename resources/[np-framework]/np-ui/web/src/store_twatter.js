const store = {
  key: "phone.apps.twatter",
  initialState: {
    view: "feed",
    posts: [],
    hasBlue: false,
    blockedUsers: [],
    showNewPostModal: false,
    avatarUrl: null,
    quotingPost: null
  }
};
export { store as default };