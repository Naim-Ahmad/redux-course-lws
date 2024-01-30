import { Link } from "react-router-dom";

export default function PostCard({ post = {} }) {

  const { id, title, image, tags, likes, isSaved, createdAt } = post;

  const allTags = tags?.map((tag, ind, tags) => <span key={tag}>#{tag}${tags.length - 1 !== ind && ','}</span>)


  return (
    <div className="lws-card">
      <Link to={`/post/${id}`}>
        <img src={image} className="lws-card-image" alt={title} />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p className="lws-likeCount"><i className="fa-regular fa-thumbs-up"></i>{likes}</p>
        </div>
        <Link to={`/post/${id}`} className="lws-postTitle"> {title} </Link>
        <div className="lws-tags">
          {allTags}
        </div>

        {isSaved && <div className="flex gap-2 mt-4">
          <span className="lws-badge"> Saved </span>
        </div>}

      </div>
    </div>
  )
}