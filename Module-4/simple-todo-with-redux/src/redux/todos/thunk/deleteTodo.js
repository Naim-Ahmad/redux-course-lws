import { deleteTodo } from "../actions";

const deleteTodoFromState = (todoId) => async (dispatch) => {
  const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
    method: "DELETE",
  });
  await response.json();

  dispatch(deleteTodo(todoId));
};

export default deleteTodoFromState;
