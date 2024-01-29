const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");

const initialState = {
  loading: false,
  videos: [],
  error: "",
};

const getVideos = createAsyncThunk("getVideos", async (video) => {
  // console.log("thunk", video);
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
    builder.addCase(getVideos.fulfilled, (state, action) => {
      state.videos = action.payload;
      state.error = "";
      state.loading = false;
      store.dispatch(getVideos(action.payload));
    });
  },
});

module.exports = videosSlice.reducer;
module.exports.getVideos = getVideos;
