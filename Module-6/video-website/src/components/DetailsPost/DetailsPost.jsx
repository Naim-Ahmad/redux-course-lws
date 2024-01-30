import { useDispatch } from "react-redux";
import { giveLike } from "../../redux/features/post/PostSlice";
import AllTags from "../ui/AllTags";

export default function DetailsPost({ post }) {

  // console.log(Object.keys(post).join(','))
  const dispatch = useDispatch()
  const { id, title, description, image, tags, likes, isSaved } = post || {}

  const handleLike = ()=> {
    dispatch(giveLike({postId: id, likeCount: likes + 1}))
  }

  let saveBtn;
  if (isSaved) {
    saveBtn = <button className="active save-btn" id="lws-singleSavedBtn">
      <i className="fa-regular fa-bookmark"></i> Saved
    </button>
  } else {
    <button className="active save-btn" id="lws-singleSavedBtn">
      <i className="fa-regular fa-bookmark"></i> Save
    </button>
  }

  return (
    <main className="post">
      <img src={image} alt={title} className="w-full rounded-md" id="lws-megaThumb" />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
        <div className="tags" id="lws-singleTags">
          <AllTags tags={tags}/>
        </div>
        <div className="btn-group">
          {/* <!-- handle like on button click --> */}
          <button onClick={handleLike} className="like-btn" id="lws-singleLinks">
            <i className="fa-regular fa-thumbs-up"></i> {likes}
          </button>
          {/* <!-- handle save on button click --> */}
          {/* <!-- use ".active" class and "Saved" text  if a post is saved, other wise "Save" --> */}
          {saveBtn}
        </div>
        <div className="mt-6">
          <p>
            {description}
          </p>
        </div>
      </div>
    </main>
  )
}