const { pending, rejected, loaded } = require("../actions");

const getVideos = (url) => async (dispatch) => {
  try {
    dispatch(pending());
    const res = await fetch(url);
    const videos = await res.json();
    videos.sort((a, b) => {
      if (Number(b.views.slice(0, -1)) < Number(a.views.slice(0, -1))) {
        return -1;
      }
      return 1;
    });
    // console.log(videos, "videos");
    dispatch(loaded(videos));
  } catch (error) {
    dispatch(rejected(error));
  }
};

module.exports = getVideos;
