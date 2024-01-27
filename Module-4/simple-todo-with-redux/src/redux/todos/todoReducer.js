import {
  ADDTODO,
  CLEARALL,
  COMPLETEALLTODO,
  DELETETODO,
  LODEDTODO,
  SETCOLOR,
  SWAPTODO,
} from "./actionType";

const initialState = [
  {
    id: 1,
    todo: "Learn React js",
    completed: false,
    color: "",
  },
];

function getTodoId(state) {
  const todoId = state.reduce((acc, todo) => Math.max(todo.id, acc), 1);
  return todoId + 1;
}

export default function todoReducer(state = initialState, action) {
  const payload = action.payload;
  switch (action.type) {
    case LODEDTODO:
      return payload;

    case ADDTODO:
      return [
        ...state,
        {
          id: getTodoId(state),
          todo: payload,
          completed: false,
          color: "",
        },
      ];

    case CLEARALL:
      return state.map((todo) => ({ ...todo, completed: false }));

    case COMPLETEALLTODO:
      return state.map((todo) => ({ ...todo, completed: true }));

    case SETCOLOR:
      return state.map((todo) => {
        if (todo.id === payload.id) {
          return { ...todo, color: payload.color };
        } else {
          return todo;
        }
      });

    case SWAPTODO:
      return state.map((todo) => {
        // console.log(todo.id, payload);
        if (todo.id === payload) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });

    case DELETETODO:
      return state.filter((todo) => todo.id !== payload);

    default:
      return state;
  }
}
