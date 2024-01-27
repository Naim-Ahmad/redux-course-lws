import { swapTodo } from "../actions";

const updatedTodoStatus = (todoId) => async (dispatch, getStore) => {
  const todo = getStore().todos[todoId - 1];
  // console.log(todo, todoId);
  const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
    method: "put",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ ...todo, completed: !todo.completed }),
  });

  const updatedTodo = await response.json();

  // console.log(updatedTodo);

  dispatch(swapTodo(updatedTodo.id));
};

export default updatedTodoStatus;
