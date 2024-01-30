import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchVideo } from "./videoAPI";

const initialState = {
  video: {},
  isError: false,
  error: "",
  loading: false,
};

export const getVideo = createAsyncThunk("video/getVideo", fetchVideo);

const videoSlice = createSlice({
  name: "video",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getVideo.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.isError = false;
      state.video = {};
    });
    builder.addCase(getVideo.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.isError = false;
      state.video = action.payload;
    });

    builder.addCase(getVideo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.isError = true;
      state.video = {};
    });
  },
});

export default videoSlice;
