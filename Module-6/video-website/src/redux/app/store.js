import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "../features/filter/filterSlice";
import postSlice from "../features/post/PostSlice";
import postsSlice from "../features/posts/postsSlice";
import sortSlice from "../features/sort/sortSlice";

const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
    post: postSlice.reducer,
    sort: sortSlice.reducer,
    filter: filterSlice.reducer,
  },
});
export default store;
