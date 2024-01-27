const fetchTodo = (dispatch) => {
  // console.log("middleware");
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      dispatch({
        type: "todo/added",
        payload: data,
      });
    });
};

module.exports = { fetchTodo };
