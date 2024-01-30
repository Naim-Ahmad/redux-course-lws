import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRelatedVideos } from "../../redux/features/relatedVideos/relatedVideosSlice"
import Loading from "../ui/Loading"
import RelatedVideosCard from "./RelatedVideosCard"

export default function RelatedVideos({ tags, id }) {

  const dispatch = useDispatch()
  const { relatedVideos, loading, isError, error } = useSelector(state => state.relatedVideos)

  useEffect(() => {
    dispatch(getRelatedVideos({ tags, id }))
  }, [])

  let content = null;

  if (loading) content = <Loading />

  if (isError && error) content = <div className="col-span-12">{error?.message}</div>

  if (relatedVideos?.length === 0 && !loading) content = <div className="col-span-12">No Videos found</div>

  if (relatedVideos?.length > 0 && !loading) content = relatedVideos?.map(video => <RelatedVideosCard key={video.id} video={video} />)

  return (
    <div
      className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
    >
      {/* <!-- single related video --> */}
      {
        content
      }
    </div>
  )
}