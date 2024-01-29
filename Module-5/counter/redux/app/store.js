const { configureStore } = require("@reduxjs/toolkit");
const counterReducer = require("../features/counter/counterSlice.js");
const dynamicCounterReducer = require("../features/dynamicCounter/dynamicCounterSlice");
const { default: logger } = require("redux-logger");
// console.log(dynamicCounterReducer);
const postReducer = require("../features/post/postSlice.js");

const store = configureStore({
  reducer: {
    counter: counterReducer,
    dcounter: dynamicCounterReducer,
    posts: postReducer,
  },
  middleware: (defaultMiddlewares) => defaultMiddlewares().concat([logger]),
});

module.exports = store;
