import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchPost from "./PostAPI";
import fetchLike from "./likeApi";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  post: {},
};

export const getPost = createAsyncThunk("postsSlice/getPost", fetchPost);
export const giveLike = createAsyncThunk("postSlice/giveLike", fetchLike);

const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getPost.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = "";
      state.post = {};
    });

    builder.addCase(getPost.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.isLoading = false;
      state.isError = false;
      state.error = "";
      state.post = action.payload;
    });

    builder.addCase(getPost.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error;
      state.post = {};
    });

    builder.addCase(giveLike.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.error = "";
      state.post.likes = action.payload?.likes;
    });
  },
});

export default postSlice;
