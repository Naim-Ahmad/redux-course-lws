import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTags } from "./tagsAPI";

const initialState = {
  tags: [],
  isError: false,
  error: "",
  loading: false,
};

export const getTags = createAsyncThunk("tags/getTags", fetchTags);

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getTags.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.isError = false;
      state.tags = [];
    });
    builder.addCase(getTags.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.isError = false;
      state.tags = action.payload;
    });

    builder.addCase(getTags.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.isError = true;
      state.tags = [];
    });
  },
});

export default tagsSlice;
