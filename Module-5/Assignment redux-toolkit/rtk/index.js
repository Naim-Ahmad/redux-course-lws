const store = require("./app/store");
const { getVideo } = require("./features/videoSlice");
const { getVideos } = require("./features/videosSlice");

store.dispatch(getVideo());
// console.log(store);

store.subscribe(() => {
  const video = store.getState();
  // console.log(video);
});
// store.dispatch(getVideos(video));
