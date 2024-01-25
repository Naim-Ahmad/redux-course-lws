/* eslint-disable no-case-declarations */
import { DELETEDATA, STOREDATA } from "./actionType";

const initialState = {
  inputData: [],
};

export default function inputDataReducer(state = initialState, action) {
  const payload = action.payload;
  switch (action.type) {
    case STOREDATA:
      // console.log(state);
      if (state.inputData.length !== 3) {
        return { inputData: [...state.inputData, payload] };
      }
      break;
    case DELETEDATA:
      const prevState = { inputData: [...state.inputData] };
      prevState.inputData.splice(payload.ind, 1);
      return prevState;
    default:
      return state;
  }
}
