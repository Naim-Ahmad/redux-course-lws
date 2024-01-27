import { ADDPRODUCT, DECRESEQUANTITY, INCRESEQUANTITY } from "./actionType";

export const increaseQuantity = (productId) => {
  return {
    type: INCRESEQUANTITY,
    payload: productId,
  };
};

export const decreaseQuantity = (productId) => {
  return {
    type: DECRESEQUANTITY,
    payload: productId,
  };
};

export const addProduct = (product) => {
  return {
    type: ADDPRODUCT,
    payload: product,
  };
};
