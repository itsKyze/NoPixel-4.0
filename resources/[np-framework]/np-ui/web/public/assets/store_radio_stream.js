const store = {
  key: "phone.apps.nopify",
  initialState: {
    show: false,
    page: "home",
    defaultSearch: "",
    tracks: [],
    stations: [],
    currentSongIndex: 0,
    songQueue: [],
    ogQueue: [],
    ogIndex: 0,
    songControls: {
      playing: false,
      shuffle: false,
      repeat: false,
      repeatSong: false,
      volume: 50,
      canCast: true,
      canControl: true,
      isCasting: false,
      castTarget: "",
      playtime: 0
    },
    playlists: [],
    playlistViewId: -1,
    castTargets: [],
    notification: {
      message: "",
      type: "",
      show: false
    },
    blockUpdate: false
  }
};
export { store as default };