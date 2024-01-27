import { combineReducers } from "redux";
import filterReducer from "./filter/filterReducer";
import todoReducer from "./todos/todoReducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  filters: filterReducer,
});

export default rootReducer;
