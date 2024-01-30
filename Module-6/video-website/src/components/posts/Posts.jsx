import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/features/posts/postsSlice";
import Loading from '../ui/Loading';
import PostCard from "./PostCard";

export default function Posts() {
  const dispatch = useDispatch()
  const { posts, isError, isLoading, error } = useSelector(state => state.posts)
  const { all, saved } = useSelector(state => state.filter)
  const { selected } = useSelector(state => state.sort)

  useEffect(() => {
    dispatch(getPosts())
  }, [])


  const filterBySaved = post => {
    if (all) {
      return true;
    } else if (saved && post.isSaved) {
      return true;
    } else {
      return false;
    }
  }

  const sortByActivity = (postA, postB) => {
    if (selected === '') {
      return 0
    }

    if(selected === 'newest'){
      const postADate = new Date(postA.createdAt)
      const postBDate = new Date(postB.createdAt)

      if(postADate < postBDate){
  
        return 1
      }else{
        return -1
      }
      
    }

    if(selected === 'most_liked'){
      if(postA.likes < postB.likes){
        return 1
      }else{
        return -1
      }
    }

  }

 
  let content = null;

  if (isLoading) content = <Loading />

  if (!isLoading && isError) content = <div>{error.message}</div>

  if (!isLoading && !isError && posts.length === 0) content = <div>No Posts Found</div>

  if (!isLoading && !isError && posts.length) {

    content = posts?.filter(filterBySaved).sort(sortByActivity).map(post => <PostCard key={post.id} post={post} />)
  }

  return (
    <main className="post-container" id="lws-postContainer">
      {/* <!-- single post --> */}
      {content}
    </main>
  )
}