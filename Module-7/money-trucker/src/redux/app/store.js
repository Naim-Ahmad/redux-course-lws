import { configureStore } from "@reduxjs/toolkit";
import transactionSlice from "../features/transaction/transactionSlice";
// console.log(transactionSlice);

const store = configureStore({
  reducer: {
    transaction: transactionSlice.reducer,
  },
});

export default store;
