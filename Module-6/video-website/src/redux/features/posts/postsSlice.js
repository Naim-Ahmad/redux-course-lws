import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchPosts from "./postsAPI";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  posts: [],
};

export const getPosts = createAsyncThunk("postsSlice/getPosts", fetchPosts);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = "";
      state.posts = [];
    });

    builder.addCase(getPosts.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.isLoading = false;
      state.isError = false;
      state.error = "";
      state.posts = action.payload;
    });

    builder.addCase(getPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error;
      state.posts = [];
    });
  },
});

export default postsSlice;
