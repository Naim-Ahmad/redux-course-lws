const { LOADED, PENDING, REJECTED } = require("./actionType");

const initialState = {
  loading: false,
  video: {},
  error: "",
};

function reducer(state = initialState, action) {
  const payload = action.payload;
  switch (action.type) {
    case LOADED:
      // console.log("action payload", payload);
      return {
        ...state,
        video: payload,
        loading: false,
        error: "",
      };

    case PENDING:
      return {
        ...state,
        video: {},
        loading: true,
        error: "",
      };
    case REJECTED:
      return {
        ...state,
        video: {},
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}

module.exports = reducer;
