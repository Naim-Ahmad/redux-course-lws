import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected: "Default",
  searchedText: "",
};

// job slice
const sortSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateSearchText: (state, action) => {
      state.searchedText = action.payload;
    },

    selectDropDown: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export default sortSlice;
export const { updateSearchText, selectDropDown } = sortSlice.actions;
