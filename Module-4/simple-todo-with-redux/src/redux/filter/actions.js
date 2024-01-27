import { COLORS, STATUSCHANGED } from "./actionType";

export const statusChanged = (status) => {
  return {
    type: STATUSCHANGED,
    payload: status,
  };
};

export const color = (color) => {
  return {
    type: COLORS,
    payload: color,
  };
};
