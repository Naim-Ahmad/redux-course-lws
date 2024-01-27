import {
  ADDCART,
  DECRESEQUANTITY,
  INCRESEQUANTITY,
  REMOVECART,
} from "./actionType";

export const addCart = (productInfo) => {
  return {
    type: ADDCART,
    payload: productInfo,
  };
};

export const removeCart = (cartId) => {
  return {
    type: REMOVECART,
    payload: cartId,
  };
};

export const increaseQuantity = (cartId) => {
  return {
    type: INCRESEQUANTITY,
    payload: cartId,
  };
};

export const decreaseQuantity = (cartId) => {
  return {
    type: DECRESEQUANTITY,
    payload: cartId,
  };
};
