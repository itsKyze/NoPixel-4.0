const appName = "coordinate-picker";
const store = {
  key: appName,
  initialState: {
    selectedCoordinates: [],
    focusedDotIndex: -1,
    isDragging: false,
    dragOffset: {
      x: 0,
      y: 0
    },
    gridSize: 50,
    shiftSize: 5,
    maxCoordinates: 3,
    submitUrl: "np-ui:submitCoordinates"
  }
};
export { appName, store as default };