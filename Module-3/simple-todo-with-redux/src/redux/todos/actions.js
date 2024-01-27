import {
  ADDTODO,
  CLEARALL,
  COMPLETEALLTODO,
  DELETETODO,
  SETCOLOR,
  SWAPTODO,
} from "./actionType";

export const addTodo = (todo) => {
  return {
    type: ADDTODO,
    payload: todo,
  };
};

export const clearAllTodo = () => {
  return {
    type: CLEARALL,
  };
};

export const completeAllTodo = () => {
  return {
    type: COMPLETEALLTODO,
  };
};

export const swapTodo = (id) => {
  return {
    type: SWAPTODO,
    payload: id,
  };
};

export const setColor = (id, color) => {
  return {
    type: SETCOLOR,
    payload: {
      id,
      color,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETETODO,
    payload: id,
  };
};
