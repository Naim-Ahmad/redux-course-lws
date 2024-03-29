import axiosInstance from "../../../config/axios.config";

export const fetchVideos = async ({ tags = [], search }) => {
  let queryString = "";

  if (tags.length > 0) {
    queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
  }

  if (search) {
    queryString += `&q=${search}`;
  }

  const res = await axiosInstance.get(`/videos?${queryString}`);
  return res.data;
};
