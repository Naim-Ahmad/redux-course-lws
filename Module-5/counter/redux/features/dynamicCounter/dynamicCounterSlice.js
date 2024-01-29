const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  value: 0,
};

const dynamicCounterSlice = createSlice({
  name: "dcounter",
  initialState,
  reducers: {
    dincrement: (state, action) => {
      state.value += action.payload;
    },
    ddecrement: (state, action) => {
      state.value -= action.payload;
    },
  },
});

module.exports = dynamicCounterSlice.reducer;
module.exports.dcounterActions = dynamicCounterSlice.actions;
