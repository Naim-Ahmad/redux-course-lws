import { DELETEDATA, STOREDATA } from "./actionType";

export const storeData = (value) => {
  return {
    type: STOREDATA,
    payload: value,
  };
};

export const deleteData = (value) => {
  return {
    type: DELETEDATA,
    payload: value,
  };
};
