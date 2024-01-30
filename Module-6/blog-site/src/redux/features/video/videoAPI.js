import axiosInstance from "../../../config/axios.config";

export const fetchVideo = async (id) => {
  const res = await axiosInstance.get(`/videos/${id}`);
  return res.data;
};
