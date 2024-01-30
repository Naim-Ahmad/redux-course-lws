import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchRelatedVideos } from "./relatedVideosAPI";

const initialState = {
  relatedVideos: [],
  isError: false,
  error: "",
  loading: false,
};

export const getRelatedVideos = createAsyncThunk(
  "relatedVideos/getRelatedVideos",
  fetchRelatedVideos
);

const relatedVideosSlice = createSlice({
  name: "getRelatedVideos",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getRelatedVideos.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.isError = false;
      state.relatedVideos = [];
    });
    builder.addCase(getRelatedVideos.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.isError = false;
      state.relatedVideos = action.payload;
    });

    builder.addCase(getRelatedVideos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.isError = true;
      state.relatedVideos = [];
    });
  },
});

export default relatedVideosSlice;
