import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  all: true,
  saved: false,
};

const filterSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    selectAll: (state, action) => {
      state.all = action.payload;
      state.saved = false;
    },
    selectSaved: (state, action) => {
      state.saved = action.payload;
      state.all = false;
    },
  },
});

export default filterSlice;
export const { selectAll, selectSaved } = filterSlice.actions;
