import { ADDPRODUCT, DECRESEQUANTITY, INCRESEQUANTITY } from "./actionType";

const initialState = [
  {
    id: 1,
    productName: "redmi note 9 ",
    category: "phone",
    image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-9-4.jpg",
    price: "500",
    quantity: "1",
  },
];

export const getProductId = (state) => {
  const productId = state.reduce(
    (acc, product) => Math.max(acc, product.id),
    0
  );
  return productId + 1;
};

export default function productReducer(state = initialState, action) {
  const payload = action.payload;

  switch (action.type) {
    case ADDPRODUCT:
      return [...state, { id: getProductId(state), ...payload }];

    case INCRESEQUANTITY:
      return state.map((product) => {
        if (product.id === payload) {
          return { ...product, quantity: product.quantity + 1 };
        } else {
          return product;
        }
      });

    case DECRESEQUANTITY:
      return state.map((product) => {
        if (product.id === payload) {
          return { ...product, quantity: product.quantity - 1 };
        } else {
          return product;
        }
      });

    default:
      return state;
  }
}
