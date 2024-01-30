import axiosInstance from "../../../config/axios.config";

const fetchPost = async (postId) => {
  const res = await axiosInstance.get(`/blogs/${postId}`);
  return res.data;
};

export default fetchPost;
