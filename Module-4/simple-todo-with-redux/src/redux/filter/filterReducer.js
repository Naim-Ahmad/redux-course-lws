import { COLORS, STATUSCHANGED } from "./actionType";

const initialState = {
  status: "All",
  colors: [],
};

export default function filterReducer(state = initialState, action) {
  const payload = action.payload;
  switch (action.type) {
    case STATUSCHANGED:
      return {
        ...state,
        status: payload,
      };

    case COLORS:
      // console.log(state.colors.push(payload));
      // console.log(payload);
      if (!state.colors.includes(payload)) {
        return {
          ...state,
          colors: [...state.colors, payload],
        };
      } else {
        return {
          ...state,
          colors: state.colors.filter((color) => color !== payload),
        };
      }

    default:
      return state;
  }
}
