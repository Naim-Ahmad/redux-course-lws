import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "../filter/filterSlice";
import jobSlice from "../job/jobSlice";
import sortSlice from "../sort/sortSlice";

const store = configureStore({
  reducer: {
    jobs: jobSlice.reducer,
    sort: sortSlice.reducer,
    filter: filterSlice.reducer,
  },
});

export default store;
