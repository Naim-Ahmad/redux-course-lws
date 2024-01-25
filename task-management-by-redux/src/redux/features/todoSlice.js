import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

const todoSlice = createSlice({
  name: "allTodo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todo.push(action.payload);
    },
    deleteTodo: (state, action) => {
      //   const index = state.todo.indexOf(action.payload);
      //   console.log(index, action.payload);
      state.todo.splice(action.payload, 1);
    },
  },
});

console.log(todoSlice);

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
