import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchVideos } from "./fetchVideosAPI";

const initialState = {
  videos: [],
  isError: false,
  error: "",
  loading: false,
};

export const getVideos = createAsyncThunk("getVideos", fetchVideos);

const videosSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getVideos.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.isError = false;
      state.videos = [];
    });
    builder.addCase(getVideos.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.isError = false;
      state.videos = action.payload;
    });

    builder.addCase(getVideos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.isError = true;
      state.videos = [];
    });
  },
});

export default videosSlice;
