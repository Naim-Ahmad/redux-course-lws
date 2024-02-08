import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (defaultMiddleWares) =>
    defaultMiddleWares().concat(apiSlice.middleware),
});
