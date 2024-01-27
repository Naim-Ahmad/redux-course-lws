import { combineReducers } from "redux";
import bookReducer from "./books/bookReducer";
import searchReducer from "./search/searchReducer";

const rootReducer = combineReducers({
  books: bookReducer,
  search: searchReducer,
});

export default rootReducer;
