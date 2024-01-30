import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  tags: [],
};

const filterSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    addRemoveTags: (state, action) => {
      const payload = action.payload;
      if (state.tags.includes(payload)) {
        state.tags = state.tags.filter((tag) => tag !== payload);
      } else {
        state.tags.push(payload);
      }
    },
    search: (state, action) => {
      state.search = action.payload;
    },
  },
});
export const { search, addRemoveTags } = filterSlice.actions;
export default filterSlice;
