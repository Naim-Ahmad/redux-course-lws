import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected: "",
};

const sortSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    changeSelectedValue: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export default sortSlice;
export const { changeSelectedValue } = sortSlice.actions;
