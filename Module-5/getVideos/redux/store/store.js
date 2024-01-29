const { configureStore } = require("@reduxjs/toolkit");

const { createLogger } = require("redux-logger");

const videosSlice = require("../features/videosSlice");
const videoSlice = require("../features/videoSlice");
const reducer = require("../features/videoSlice");
// console.log(videoReducer);

const logger = createLogger();

const store = configureStore({
  reducer: {
    video: reducer,
  },
  middleware: (getDefault) => getDefault().concat([]),
});

module.exports = store;
