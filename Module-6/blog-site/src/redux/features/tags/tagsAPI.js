import axiosInstance from "../../../config/axios.config";

export const fetchTags = async () => {
  const res = await axiosInstance.get("/tags");
  return res.data;
};
