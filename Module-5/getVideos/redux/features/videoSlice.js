const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const store = require("../store/store");
const { getVideos } = require("./videosSlice");
// console.log(store);
const initialState = {
  loading: false,
  video: {},
  error: "",
};

const getVideo = createAsyncThunk("getVideo", async () => {
  const res = await fetch("http://localhost:9000/videos");
  const video = await res.json();
  return video;
});

const videoSlice = createSlice({
  name: "videoSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getVideo.fulfilled, (state, action) => {
      state.video = action.payload;
      state.error = "";
      state.loading = false;
      store.dispatch(getVideos(action.payload));
    });
  },
});

module.exports = videoSlice.reducer;
module.exports.getVideo = getVideo;
