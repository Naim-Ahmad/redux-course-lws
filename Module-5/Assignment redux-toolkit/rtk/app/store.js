const { configureStore } = require("@reduxjs/toolkit");
const videosReducer = require("../features/videosSlice");
const videoReducer = require("../features/videoSlice");
const { default: logger } = require("redux-logger");

var store = configureStore({
  reducer: {
    videos: videosReducer,
    video: videoReducer,
  },
  middleware: (defaultMiddleware) => defaultMiddleware().concat([]),
});

module.exports = store;
