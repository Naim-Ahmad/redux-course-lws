import { loadedTodo } from "../actions";

const getTodo = async (dispatch) => {
  const response = await fetch("http://localhost:9000/todos");

  const todos = await response.json();

  dispatch(loadedTodo(todos));
};

export default getTodo;
