import axiosInstance from "../../../config/axios.config";
// tags_like=javascript&tags_like=react&tags_like=tips&id_ne=1

export const fetchRelatedVideos = async ({ tags, id }) => {
  const params =
    tags?.length > 0
      ? tags.map((tag) => `tags_like=${tag}`).join("&") + `&id_ne=${id}`
      : `id_ne=${id}`;
  const res = await axiosInstance.get(`/videos?${params}`);
  return res.data;
};
