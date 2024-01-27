import { setColor } from "../actions";

const changeColor = (todoId, color) => async (dispatch, getStore) => {
  const todo = getStore().todos[todoId - 1];
  // console.log(todo, todoId);
  const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
    method: "put",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ ...todo, color }),
  });

  const updatedTodo = await response.json();

  // console.log(updatedTodo);

  dispatch(setColor(updatedTodo.id, updatedTodo.color));
};

export default changeColor;
