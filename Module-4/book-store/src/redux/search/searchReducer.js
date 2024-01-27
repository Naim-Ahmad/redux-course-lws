import { SEARCH } from "./ationType";

const initialState = "";

export default function searchReducer(state = initialState, action) {
  const payload = action.payload;
  switch (action.type) {
    case SEARCH:
      return payload;

    default:
      return state;
  }
}
