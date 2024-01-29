const { LOADED, PENDING, REJECTED } = require("./actionType");

const loaded = (video) => {
  return {
    type: LOADED,
    payload: video,
  };
};
const rejected = (error) => {
  return {
    type: REJECTED,
    payload: error,
  };
};
const pending = () => {
  return {
    type: PENDING,
  };
};

module.exports = {
  rejected,
  loaded,
  pending,
};
