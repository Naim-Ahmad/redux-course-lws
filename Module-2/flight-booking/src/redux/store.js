import { createStore } from "redux";
import inputDataReducer from "./inputData/inputDataReducer";

export const store = createStore(inputDataReducer);
