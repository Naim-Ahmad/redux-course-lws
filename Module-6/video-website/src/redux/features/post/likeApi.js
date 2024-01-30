import axiosInstance from "../../../config/axios.config";

const fetchLike = async ({ postId, likeCount }) => {
  const res = await axiosInstance.patch(`/blogs/${postId}`, {
    likes: likeCount,
  });
  return res.data;
};

export default fetchLike;
