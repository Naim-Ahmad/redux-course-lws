const getVideos = require("../../videos/thunk/getVideos");
const { loaded, pending, rejected } = require("../actions");

const getVideo = async (dispatch, getState) => {
  try {
    // console.log("helo");
    dispatch(pending());
    const response = await fetch("http://localhost:9000/videos");
    const video = await response.json();
    dispatch(loaded(video));
    const params = video.tags.reduce(
      (acc, tag) => acc + `tags_like=${tag}&`,
      "?"
    );
    const url = `http://localhost:9000/videos${params}`.slice(0, -1);
    // console.log(url);
    dispatch(getVideos(url));
  } catch (error) {
    dispatch(rejected(error));
  }
};

module.exports = getVideo;
