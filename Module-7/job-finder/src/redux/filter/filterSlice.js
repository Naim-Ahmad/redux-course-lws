import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedFilter: "All Available Jobs",
};

// job slice
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    toggleSelectedTag: (state, action) => {
      state.selectedFilter = action.payload.trim();
    },
  },
});

export default filterSlice;
export const { toggleSelectedTag } = filterSlice.actions;
