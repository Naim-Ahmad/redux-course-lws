const { applyMiddleware, createStore, combineReducers } = require("redux");
const reducer = require("./video/reducer");
const videosReducer = require("./videos/reducer");
const { thunk } = require("redux-thunk");
const { createLogger } = require("redux-logger");

const logger = createLogger();

const store = createStore(
  combineReducers({
    video: reducer,
    videos: videosReducer,
  }),
  applyMiddleware(thunk, logger)
);
module.exports = store;
