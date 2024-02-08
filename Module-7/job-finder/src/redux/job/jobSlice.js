import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteJob, getJob, getJobs, postJob, putJob } from "./jobAPI";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  jobs: [],
  job: {},
};

// async thunk

export const findJobs = createAsyncThunk("job/findJobs", getJobs);
export const findJob = createAsyncThunk("job/findJob", getJob);
export const createJob = createAsyncThunk("job/createJob", postJob);
export const updateJob = createAsyncThunk("job/updateJob", putJob);
export const removeJob = createAsyncThunk("job/removeJob", deleteJob);

// job slice
const jobSlice = createSlice({
  name: "jobs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(findJobs.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
        state.jobs = [];
      })
      .addCase(findJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.jobs = action.payload;
      })
      .addCase(findJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error;
      })

      .addCase(findJob.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
        state.job = {};
      })
      .addCase(findJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.job = action.payload;
      })
      .addCase(findJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error;
      })

      .addCase(createJob.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.jobs.push(action.payload);
      })
      .addCase(createJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error;
      })

      .addCase(updateJob.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(updateJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        const indexToUpdate = state.jobs.findIndex(
          (job) => job.id === action.payload?.id
        );
        state.jobs[indexToUpdate] = action.payload;
      })
      .addCase(updateJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error;
      })

      .addCase(removeJob.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(removeJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.jobs = state.jobs.filter((job) => job.id !== action.meta.arg);
      })
      .addCase(removeJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error;
      });
  },
});

export default jobSlice;
