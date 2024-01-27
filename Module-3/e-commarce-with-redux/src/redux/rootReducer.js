import { combineReducers } from "redux";
import cartReducer from "../redux/cart/cartReducer";
import productReducer from "./products/productReducer";

const rootReducer = combineReducers({
  products: productReducer,
  carts: cartReducer,
});

export default rootReducer;
