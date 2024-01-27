import { ADDED, EDIT, EDITED, LOADED, REMOVED } from "./actionType";

const initialState = [];

export default function bookReducer(state = initialState, action) {
  const payload = action.payload;
  switch (action.type) {
    case ADDED:
      return [...state, payload];

    case LOADED:
      return payload;

    case REMOVED:
      return state.filter((book) => book.id !== payload);

    case EDIT:
      return state.map((book) => {
        if (book.id === payload) {
          if (book.isEdit) {
            return { ...book, isEdit: false };
          }
          return { ...book, isEdit: true };
        } else {
          if (book.isEdit) {
            return { ...book, isEdit: false };
          }
          return book;
        }
      });

    case EDITED:
      // console.log(payload);
      console.log(payload);
      return state.map((book) => {
        if (book.id === payload.id) {
          return payload;
        } else {
          return book;
        }
      });

    default:
      return state;
  }
}
