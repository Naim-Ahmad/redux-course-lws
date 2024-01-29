const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const { getVideos } = require("./videosSlice");
const store = require("../app/store");
console.log(store);

const initialState = {
  loading: false,
  video: {},
  error: "",
};

const getVideo = createAsyncThunk("getVideo", async (dispatch) => {
  const res = await fetch("http://localhost:9000/videos");
  const data = await res.json();
  return data;
});

const videoSlice = createSlice({
  name: "video",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getVideo.pending, (state) => {
      state.loading = true;
      state.video = {};
      state.error = "";
    });

    builder.addCase(getVideo.fulfilled, (state, action) => {
      // console.log(action);
      state.error = "";
      state.loading = false;
      state.video = action.payload;
      // store.dispatch(getVideos(action.payload));
      store;
    });

    builder.addCase(getVideo.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
      state.video = {};
    });
  },
});

module.exports = videoSlice.reducer;
module.exports.videoAction = videoSlice.actions;
module.exports.getVideo = getVideo;
