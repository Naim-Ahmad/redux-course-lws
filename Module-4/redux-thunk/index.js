const { createStore, applyMiddleware } = require("redux");
const { delayMiddleware, fetchTodoMiddleWare } = require("./midlewares");
const { fetchTodo } = require("./function");
const { thunk } = require("redux-thunk");

// initial state
const initialState = {
  todos: [],
};

// reducer
function reducer(state = initialState, action) {
  const payload = action.payload;
  switch (action.type) {
    case "todo/added":
      return {
        ...state,
        todos: [...state.todos, payload],
      };

    default:
      return state;
  }
}

// store
const store = createStore(reducer, applyMiddleware(thunk));

// subscribe
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchTodo);
