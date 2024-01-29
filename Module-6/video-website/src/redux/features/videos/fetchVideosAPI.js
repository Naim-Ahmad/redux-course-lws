import axiosInstance from "../../../config/axios.config";

export const fetchVideos = async () => {
  const res = await axiosInstance.get("/videos");
  return res.data;
};
