const { getVideo } = require("./redux/features/videoSlice");
const store = require("./redux/store/store");

store.dispatch(getVideo());
// console.log(store.getState());
store.subscribe(() => {
  console.log(store.getState());
});
