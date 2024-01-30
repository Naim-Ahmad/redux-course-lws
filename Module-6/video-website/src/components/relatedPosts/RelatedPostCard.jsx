import { Link } from "react-router-dom";
import AllTags from "../ui/AllTags";

export default function RelatedPostCard({ post = {} }) {
  // console.log(Object.keys(post).join(','))
  const { id, title,image, tags, createdAt } = post;

  return (
    <div className="card">
      <Link to={`/post/${id}`}>
        <img src={image} className={title} alt="" />
      </Link>
      <div className="p-4">
        <Link to={`/post/${id}`} className="text-lg post-title lws-RelatedPostTitle">
          {title}
        </Link>
        <div className="mb-0 tags">
          <AllTags tags={tags}/>
        </div>
        <p>{createdAt}</p>
      </div>
    </div>
  )
}