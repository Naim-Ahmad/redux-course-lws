import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "../features/filter/filterSlice";
import relatedVideosSlice from "../features/relatedVideos/relatedVideosSlice";
import tagsSlice from "../features/tags/tagsSlice";
import videoSlice from "../features/video/videoSlice";
import videosSlice from "../features/videos/videosSlice";

const store = configureStore({
  reducer: {
    videos: videosSlice.reducer,
    video: videoSlice.reducer,
    relatedVideos: relatedVideosSlice.reducer,
    tags: tagsSlice.reducer,
    filter: filterSlice.reducer,
  },
});

export default store;
