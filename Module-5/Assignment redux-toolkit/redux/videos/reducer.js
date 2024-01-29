const { LOADED, PENDING, REJECTED } = require("./actionType");
const { LOADED: LOADEDA } = require("../video/actionType");
const store = require("../store");
const getVideos = require("./thunk/getVideos");

const initialState = {
  loading: false,
  videos: [],
  error: "",
};

function reducer(state = initialState, action) {
  const payload = action.payload;
  switch (action.type) {
    case LOADED:
      // console.log("action payload", payload);
      return {
        ...state,
        videos: payload,
        loading: false,
        error: "",
      };

    case PENDING:
      return {
        ...state,
        videos: [],
        loading: true,
        error: "",
      };
    case REJECTED:
      return {
        ...state,
        videos: [],
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}

module.exports = reducer;
