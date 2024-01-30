import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPosts } from "../../redux/features/posts/postsSlice"
import Loading from "../ui/Loading"
import RelatedPostCard from "./RelatedPostCard"


export default function RelatedPosts({ tags, id }) {

  const dispatch = useDispatch()
  const { posts, isLoading, isError, error } = useSelector(state => state.posts)
  // console.log(posts)

  useEffect(() => {
    dispatch(getPosts({tags, id}))
  }, [tags])

  let content = null;

  if(isLoading) content = <Loading/>

  if(!isLoading && isError) content = <div>{error.message}</div>

  if(!isLoading && !isError && posts.length === 0) content = <div>No Related Posts</div>

  if(!isLoading && !isError && posts.length) content =  posts.map(post=> <RelatedPostCard key={post.id} post={post}/>)

  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">Related Posts</h4>
      <div className="space-y-4 related-post-container">
        {/* <!-- related post  --> */}
        {
         content
        }
      </div>
    </aside>
  )
}