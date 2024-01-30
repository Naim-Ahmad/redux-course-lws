import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import DetailsPost from "../components/DetailsPost/DetailsPost";
import RelatedPosts from '../components/relatedPosts/RelatedPosts.jsx';
import Loading from '../components/ui/Loading.jsx';
import { getPost } from '../redux/features/post/PostSlice.js';

export default function PostPage() {
  const dispatch = useDispatch()
  const { postId } = useParams()
  const { post, isLoading, isError, error } = useSelector(state=> state.post)

  useEffect(() => {
    dispatch(getPost(postId))
  }, [postId])

  if(isLoading) return <Loading/>

  if(isError) return <div>{error.message}</div>

  return (
    <>
      <div className="container mt-8">
        <Link to="/" className="inline-block text-gray-600 home-btn" id="lws-goHome"><i
          className="mr-2 fa-solid fa-house"></i>Go Home</Link>
      </div>
      <section className="post-page-container">
        {/* <!-- detailed post  --> */}
        <DetailsPost post={post}/>

        {/* <!-- related posts --> */}
        <RelatedPosts tags={post?.tags} id={post?.id}/>
      </section>
    </>
  )
}