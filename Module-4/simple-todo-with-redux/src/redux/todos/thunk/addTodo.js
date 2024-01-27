import { addTodo } from "../actions";

const addTodoToState = (todo) => {
  return async (dispatch, getStore) => {
    dispatch(addTodo(todo));
    const todos = getStore().todos;
    console.log(todos);
    const response = await fetch("http://localhost:9000/todos", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(todos[todos.length - 1]),
    });
    await response.json();

    // console.log(updatedTodo);
  };
};

export default addTodoToState;
