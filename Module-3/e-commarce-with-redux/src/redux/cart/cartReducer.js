import { getProductId as getCartId } from "../products/productReducer";
import {
  ADDCART,
  DECRESEQUANTITY,
  INCRESEQUANTITY,
  REMOVECART,
} from "./actionType";

const initialState = [];

export default function cartReducer(state = initialState, action) {
  const payload = action.payload;

  switch (action.type) {
    case ADDCART:
      return [...state, { ...payload, id: getCartId(state), quantity: 1 }];

    case REMOVECART:
      return state.filter((cartItem) => cartItem.id !== payload);

    case INCRESEQUANTITY:
      return state.map((cart) => {
        if (cart.id === payload) {
          return { ...cart, quantity: cart.quantity + 1 };
        } else {
          return cart;
        }
      });

    case DECRESEQUANTITY:
      return state.map((cart) => {
        if (cart.id === payload && cart.quantity > 1) {
          return { ...cart, quantity: cart.quantity - 1 };
        } else {
          return cart;
        }
      });

    default:
      return state;
  }
}
