import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import RelatedVideos from '../components/relatedVideos/RelatedVideos.jsx'
import Loading from '../components/ui/Loading.jsx'
import VideoDescription from '../components/video/VideoDescription.jsx'
import VideoPlayer from '../components/video/VideoPlayer'
import { getVideo } from '../redux/features/video/videoSlice.js'

export default function VideoPage() {

  const dispatch = useDispatch()
  const { video, loading, error, isError } = useSelector(state => state.video)

  const { id } = useParams()

  useEffect(() => {
    dispatch(getVideo(id))
  }, [id])

  let content;

  if (loading) {
    content = <Loading />
  }

  if (isError && error && !loading) {
    content = <div className="col-span-12">{error?.message}</div>
  }

  if (video?.id) {
    content = <>
      <div className="col-span-full w-full space-y-8 lg:col-span-2">
        {/* <!-- video player --> */}
        <VideoPlayer video={video} />

        {/* <!-- video description --> */}
        <VideoDescription description={video}/>
      </div>

      {/* <!-- related videos --> */}
      <RelatedVideos tags={video?.tags} id={video?.id}/>
    </>
  }


  return (
    <section className="pt-6 pb-20">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div className="grid grid-cols-3 gap-2 lg:gap-8">
          {content}
        </div>
      </div>
    </section>
  )
}