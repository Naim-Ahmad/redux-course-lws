import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  deleteTransaction,
  editTransaction,
  getTransaction,
  postTransaction,
} from "./TransactionAPI";

const initialState = {
  transactions: [],
  isLoading: false,
  isError: false,
  error: "",
  editing: {},
};

// async thunk
export const createTransaction = createAsyncThunk(
  "transaction/createTransaction",
  postTransaction
);

export const findTransaction = createAsyncThunk(
  "transaction/findTransaction",
  getTransaction
);

export const updateTransaction = createAsyncThunk(
  "transaction/updateTransaction",
  editTransaction
);

export const removeTransaction = createAsyncThunk(
  "transaction/removeTransaction",
  deleteTransaction
);

// transaction slice
const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    activeEdit: (state, action) => {
      state.editing = {
        ...action.payload,
        isEditing: true,
      };
    },

    deActiveEdit: (state) => {
      state.editing = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTransaction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(createTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.transactions.push(action.payload);
      })
      .addCase(createTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error;
      })

      .addCase(findTransaction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(findTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.transactions = action.payload;
      })
      .addCase(findTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error;
      })

      .addCase(updateTransaction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(updateTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        const indexToUpdate = state.transactions.findIndex(
          (t) => t.id === action.payload?.id
        );
        state.transactions[indexToUpdate] = action.payload;
      })
      .addCase(updateTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error;
      })

      .addCase(removeTransaction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(removeTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.transactions = state.transactions.filter(
          (t) => t.id !== action.meta.arg
        );
      })
      .addCase(removeTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error;
      });
  },
});

export default transactionSlice;

export const { activeEdit, deActiveEdit } = transactionSlice.actions;
