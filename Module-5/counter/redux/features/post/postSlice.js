const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  loading: false,
  posts: [],
  error: "",
};

const fetchPosts = createAsyncThunk("post/postSlice", async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const posts = await response.json();
  return posts;
});

const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      (state.loading = true), (state.posts = []), (state.error = "");
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = "";
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
      state.posts = [];
    });
  },
});

module.exports = postSlice.reducer;
module.exports.fetchPosts = fetchPosts;
