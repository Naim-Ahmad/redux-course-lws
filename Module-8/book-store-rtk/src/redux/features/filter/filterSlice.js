import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchText: "",
  featured: null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    featuredTrue: (state) => {
      state.featured = true;
    },
    featuredNull: (state) => {
      state.featured = null;
    },
  },
});

export default filterSlice;
export const { featuredTrue, featuredNull, setSearchText } =
  filterSlice.actions;
