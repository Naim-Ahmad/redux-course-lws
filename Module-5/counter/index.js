const store = require("./redux/app/store.js");
const {
  dcounterActions,
} = require("./redux/features/dynamicCounter/dynamicCounterSlice");
const { fetchPosts } = require("./redux/features/post/postSlice.js");
// console.log(dcounterActions);

// console.log(store.getState());

// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(dcounterActions.dincrement(5));
// store.dispatch(dcounterActions.increment());
// store.dispatch(dcounterActions.ddecrement(2));

store.dispatch(fetchPosts());
