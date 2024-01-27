import { SEARCH } from "./ationType";

export const search = (text) => {
  return {
    type: SEARCH,
    payload: text,
  };
};
