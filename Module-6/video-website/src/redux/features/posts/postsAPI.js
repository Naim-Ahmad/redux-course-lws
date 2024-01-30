import axiosInstance from "../../../config/axios.config";

const fetchPosts = async ({ tags, id } = {}) => {
  let queryString = "/blogs";
  if (tags?.length > 0) {
    queryString +=
      "?" + tags.map((tag) => `tags_like=${tag}`).join("&") + `&id_ne=${id}`;
  } else {
    queryString += `?id_ne=${id}`;
  }
  // console.log(queryString, tags);
  const res = await axiosInstance.get(queryString);
  return res.data;
};

export default fetchPosts;
