const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  loading: false,
  videos: [],
  error: "",
};

const getVideos = createAsyncThunk("getVideos", async (video) => {
  console.log("thunk", video);
  const params = video?.tags?.reduce(
    (acc, tag) => acc + `tags_like=${tag}&`,
    "?"
  );
  const url = `http://localhost:9000/videos${params}`.slice(0, -1);
  const res = await fetch(url);
  const videos = await res.json();
  return videos;
});

const videosSlice = createSlice({
  name: "videos",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getVideos.pending, (state, action) => {
      state.videos = [];
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getVideos.fulfilled, (state, action) => {
      state.videos = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(getVideos.rejected, (state, action) => {
      state.videos = [];
      state.loading = false;
      state.error = action.error;
    });
  },
});

module.exports = videosSlice.reducer;
module.exports.videosAction = videosSlice.actions;
module.exports.getVideos = getVideos;
