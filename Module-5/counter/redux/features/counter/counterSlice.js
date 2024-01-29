const { createSlice } = require("@reduxjs/toolkit");
const { dcounterActions } = require("../dynamicCounter/dynamicCounterSlice");

const initialState = {
  value: 0,
};

console.log(dcounterActions);

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
  },
  extraReducers: (builder) =>
    builder.addCase(dcounterActions.ddecrement, (state, action) => {
      state.value += action.payload;
    }),
});

module.exports = counterSlice.reducer;
module.exports.counterActions = counterSlice.actions;
